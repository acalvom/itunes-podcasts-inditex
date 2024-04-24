import axios from 'axios'
import { Podcast } from '../domain/podcast'
import { PodcastRepository } from '../domain/podcast.repository'

export class ApiPodcastRepository implements PodcastRepository {
  async getAll(): Promise<Podcast[]> {
    // TODO: add lib with http endpoints
    // TODO: lo que recibo del api no coincide con lo que tengo en IPodcastPrimitives
    const res = await axios.get(`${import.meta.env.VITE_API_URL}`)
    const rawPodcasts = res.data
    return rawPodcasts
  }
}
