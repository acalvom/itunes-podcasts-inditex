import { createClient } from '@/lib/http-client'
import { Podcast } from '../domain/podcast'
import { PodcastRepository } from '../domain/podcast.repository'

import { Escape } from '@/shared/domain/char-escaper/escape'
import { PodcastAPIResponse } from './dtos/podcast-api-response.dto'
import { rawToPodcast } from './mappers/podcasts.mapper'

// TODO: inversion del control
const http = createClient({ apiUrl: import.meta.env.VITE_API_URL })

export class ApiPodcastRepository implements PodcastRepository {
  private async getPodcastsFromApi(): Promise<Podcast[]> {
    const rawResponse: PodcastAPIResponse = await http.get(
      '/us/rss/toppodcasts/limit=100/genre=1310/json'
    )
    return rawToPodcast(rawResponse)
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
}
