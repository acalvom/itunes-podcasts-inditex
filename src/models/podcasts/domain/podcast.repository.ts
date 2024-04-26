import { Podcast } from './podcast'

export interface PodcastRepository {
  getAll(): Promise<Podcast[]>
  getBySearch(search: string): Promise<Podcast[]>
}
