import { Id } from '@/shared/domain/interfaces/id'
import { Parser } from '@/shared/domain/parser/parser'
import { IPodcast, Image } from './interfaces/podcast'
import { IPodcastPrimitives } from './interfaces/podcast-primitives'

export class Podcast implements IPodcast {
  id: Id
  name: string
  artist: string
  image: Image

  constructor(value: IPodcast) {
    this.id = value.id
    this.name = value.name
    this.artist = value.artist
    this.image = value.image
  }

  static fromPrimitives(value: IPodcastPrimitives): Podcast {
    return new Podcast({
      ...value,
      image: { url: value.image.url, height: Parser.toIntNumber(value.image.height) },
    })
  }
}
