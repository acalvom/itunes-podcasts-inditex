import { createClient } from '@/lib/http-client'
import { Podcast } from '../domain/podcast'
import { PodcastRepository } from '../domain/podcast.repository'

import { PodcastAPIResponse } from './dtos/podcast-api-response.dto'
import { rawToPodcast } from './mappers/podcasts.mapper'

// TODO: inversion del control
const http = createClient({ baseURL: import.meta.env.VITE_API_URL })

export class ApiPodcastRepository implements PodcastRepository {
  async getAll(): Promise<Podcast[]> {
    const rawResponse: PodcastAPIResponse = await http.get(
      '/us/rss/toppodcasts/limit=100/genre=1310/json'
    )
    return rawToPodcast(rawResponse)
  }
}
