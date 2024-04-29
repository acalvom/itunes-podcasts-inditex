import { Id } from '@/shared/domain/interfaces/id'
import { Episode } from './episode'
import { Podcast } from './podcast'

export interface PodcastRepository {
  getAll(): Promise<Podcast[]>
  getBySearch(search: string): Promise<Podcast[]>
  getById(id: Id): Promise<Podcast | undefined>
  getEpisodesById(id: Id): Promise<Episode[]>
}
