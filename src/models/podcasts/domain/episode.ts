import { Datetime } from '@/shared/domain/dates/datetime'
import { Id } from '@/shared/domain/interfaces/id'
import { Parser } from '@/shared/domain/parser/parser'

export interface IEpisodePrimitives {
  id: number
  name: string
  url: string
  duration: number
  releaseDate: string
  description: string
}

interface IEpisode {
  id: Id
  name: string
  url: string
  duration: number
  releaseDate: Date
  description: string
}

export class Episode implements IEpisode {
  id: Id
  name: string
  url: string
  duration: number
  releaseDate: Date
  description: string

  constructor(value: IEpisode) {
    this.id = value.id
    this.name = value.name
    this.url = value.url
    this.duration = value.duration
    this.releaseDate = value.releaseDate
    this.description = value.description
  }

  static fromPrimitives(value: IEpisodePrimitives): Episode {
    return new Episode({
      ...value,
      id: Parser.numberToString(value.id),
      releaseDate: Datetime.toDate(value.releaseDate),
    })
  }
}
