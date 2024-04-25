import axios from 'axios'
import { Podcast } from '../domain/podcast'
import { PodcastRepository } from '../domain/podcast.repository'
import { AxiosResponse } from './dtos/podcast-api-response.dto'
import { apiResponseToPrimitives } from './mappers/podcasts.mapper'

export class ApiPodcastRepository implements PodcastRepository {
  async getAll(): Promise<Podcast[]> {
    // TODO: add lib with http endpoints
    const rawResponse: AxiosResponse = await axios.get(`${import.meta.env.VITE_API_URL}`)
    const jsonPodcasts = apiResponseToPrimitives(rawResponse.data)
    return jsonPodcasts.map(Podcast.fromPrimitives)
  }
}
