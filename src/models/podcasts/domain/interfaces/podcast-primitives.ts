import { Id } from '@/shared/domain/interfaces/id'

export interface IPodcastPrimitives {
  id: Id
  name: string
  artist: string
  image: IImagePrimitive
}

export interface IImagePrimitive {
  url: string
  height: string
}
