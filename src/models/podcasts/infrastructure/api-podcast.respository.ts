import { createClient } from '@/lib/http-client'
import { Escape } from '@/shared/domain/char-escaper/escape'
import { Id } from '@/shared/domain/interfaces/id'
import { Episode } from '../domain/episode'
import { Podcast } from '../domain/podcast'
import { PodcastRepository } from '../domain/podcast.repository'
import { PodcastAPIResponse } from './dtos/podcast-api-response.dto'
import { EpisodesAPIResponse } from './dtos/podcast-episodes-api-response.dto'
import { rawToEpisodes, rawToPodcast } from './mappers/podcasts.mapper'

// TODO: inversion del control
const http = createClient({ apiUrl: import.meta.env.VITE_API_URL })

export class ApiPodcastRepository implements PodcastRepository {
  private async getPodcastsFromApi(): Promise<Podcast[]> {
    const rawResponse: PodcastAPIResponse = await http.get(
      '/us/rss/toppodcasts/limit=100/genre=1310/json'
    )
    return rawToPodcast(rawResponse)
  }

  private async getEpisodesFromApi(podcastId: string): Promise<Episode[]> {
    const rawResponse: EpisodesAPIResponse = await http.get(
      `/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode`
    )
    return rawToEpisodes(rawResponse)
  }

  async getAll(): Promise<Podcast[]> {
    return this.getPodcastsFromApi()
  }

  async getBySearch(search: string): Promise<Podcast[]> {
    const escapedSearch = Escape.toLower(search)
    const podcasts = await this.getPodcastsFromApi()
    return podcasts.filter(
      (podcast) =>
        Escape.toLower(podcast.name).includes(escapedSearch) ||
        Escape.toLower(podcast.name).includes(escapedSearch)
    )
  }

  async getById(id: Id): Promise<Podcast | undefined> {
    const podcasts = await this.getPodcastsFromApi()
    return podcasts.find((podcast) => podcast.id === id)
  }

  async getEpisodesById(id: Id): Promise<Episode[]> {
    return await this.getEpisodesFromApi(id)
  }
}
