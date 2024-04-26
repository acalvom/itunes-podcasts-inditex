import { Id } from '@/shared/domain/interfaces/id'

export interface Podcast {
  id: Id
  name: string
  image: string
  artist: string
}
