import { HttpClient } from '@/lib/http-client'
import { Escape } from '@/shared/domain/char-escaper/escape'
import { Datetime } from '@/shared/domain/dates/datetime'
import { Id } from '@/shared/domain/interfaces/id'
import { Parser } from '@/shared/domain/parser/parser'
import { Storage } from '@/shared/domain/storage/storage.repository'
import { Episode } from '../domain/episode'
import { Podcast } from '../domain/podcast'
import { PodcastRepository } from '../domain/podcast.repository'
import { PodcastAPIResponse } from './dtos/podcast-api-response.dto'
import { EpisodesAPIResponse } from './dtos/podcast-episodes-api-response.dto'
import { rawToEpisodes, rawToPodcast } from './mappers/podcasts.mapper'

export class ApiPodcastRepository implements PodcastRepository {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly storage: Storage
  ) {
    this.checkCache()
  }

  private checkCache(): void {
    const cacheOn: string = this.storage.get('cache_on')
    const expiredCache = Datetime.isOverOneDay(Parser.toIntNumber(cacheOn))
    if (!cacheOn || expiredCache) {
      this.storage.clear()
      this.storage.set('cache_on', Date.now())
    }
  }

  private getPodcastsFromCache(): Podcast[] {
    return this.storage.get('podcasts')
  }

  private setPodcastsToCache(podcasts: Podcast[]): void {
    this.storage.set('podcasts', podcasts)
  }

  private getPodcastFromCache(id: Id): Podcast {
    return this.storage.get('podcast_' + id)
  }

  private setPodcastToCache(podcast: Podcast): void {
    this.storage.set('podcast_' + podcast.id, podcast)
  }

  private getEpisodesFromCache(podcastId: Id): Episode[] {
    return this.storage.get('episodes_from_' + podcastId)
  }

  private setEpisodesToCache(podcastId: Id, episodes: Episode[]): void {
    this.storage.set('episodes_from_' + podcastId, episodes)
  }

  private async getPodcastsFromApi(): Promise<Podcast[]> {
    const rawResponse: PodcastAPIResponse = await this.httpClient.get(
      '/us/rss/toppodcasts/limit=100/genre=1310/json'
    )
    return rawToPodcast(rawResponse)
  }

  private async getEpisodesFromApi(podcastId: string): Promise<Episode[]> {
    const rawResponse: EpisodesAPIResponse = await this.httpClient.get(
      `/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=1000`
    )
    return rawToEpisodes(rawResponse)
  }

  async getAll(): Promise<Podcast[]> {
    const cache = this.getPodcastsFromCache()
    if (cache) return cache

    const podcasts = await this.getPodcastsFromApi()
    this.setPodcastsToCache(podcasts)
    return podcasts
  }

  async getBySearch(search: string): Promise<Podcast[]> {
    const escapedSearch = Escape.toLower(search)
    const podcasts = this.getPodcastsFromCache()

    return podcasts.filter(
      (podcast) =>
        Escape.toLower(podcast.name).includes(escapedSearch) ||
        Escape.toLower(podcast.artist).includes(escapedSearch)
    )
  }

  async getById(id: Id): Promise<Podcast | undefined> {
    const podcastCache = this.getPodcastFromCache(id)
    if (podcastCache) return podcastCache

    const podcasts = this.getPodcastsFromCache() || (await this.getPodcastsFromApi())
    const podcast = podcasts?.find((podcast) => podcast.id === id)
    if (podcast) this.setPodcastToCache(podcast)

    return podcast
  }

  async getEpisodesById(id: Id): Promise<Episode[]> {
    const cache = this.getEpisodesFromCache(id)
    if (cache) return cache

    const episodes = await this.getEpisodesFromApi(id)
    this.setEpisodesToCache(id, episodes)
    return episodes
  }

  async getEpisodeById(id: string, podcastId: string): Promise<Episode | undefined> {
    const episodes = await this.getEpisodesFromApi(podcastId)
    return episodes.find((episode) => episode.id === id)
  }
}
