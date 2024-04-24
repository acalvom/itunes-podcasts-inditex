import { Id } from '@/shared/domain/interfaces/id'

export interface Image {
  url: string
  height: number
}

export interface IPodcast {
  id: Id
  name: string
  image: Image
  artist: string
}
