import { createClient } from '@/lib/http-client'
import { Podcast } from '../domain/podcast'
import { PodcastRepository } from '../domain/podcast.repository'

import { PodcastAPIResponse } from './dtos/podcast-api-response.dto'
import { apiResponseToPrimitives } from './mappers/podcasts.mapper'

const http = createClient({})

export class ApiPodcastRepository implements PodcastRepository {
  async getAll(): Promise<Podcast[]> {
    const rawResponse: PodcastAPIResponse = await http.get(
      '/us/rss/toppodcasts/limit=100/genre=1310/json'
    )
    const jsonPodcasts = apiResponseToPrimitives(rawResponse)
    return jsonPodcasts.map(Podcast.fromPrimitives)
  }
}
