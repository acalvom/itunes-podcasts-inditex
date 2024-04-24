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
    const id = value.id.label
    const name = value['im:name'].label
    const artist = value['im:artist'].label
    const image = value['im:image'][3]

    return new Podcast({
      id,
      name,
      artist,
      image: { url: image.label, height: Parser.toIntNumber(image.attributes.height) },
    })
  }
}
