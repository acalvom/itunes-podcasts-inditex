// TODO: falta por añadir la respuesta del API

export interface IPodcastPrimitives {
  'im:name': ImName
  'im:image': IPrimitiveImage[]
  summary: Summary
  'im:price': ImPrice
  'im:contentType': ImContentType
  rights?: Rights
  title: Title
  link: Link
  id: Id
  'im:artist': ImArtist
  category: Category
  'im:releaseDate': ImReleaseDate
}

interface ImName {
  label: string
}

export interface IPrimitiveImage {
  label: string
  attributes: Attributes
}

interface Attributes {
  height: string
}

interface Summary {
  label: string
}

interface ImPrice {
  label: string
  attributes: Attributes2
}

interface Attributes2 {
  amount: string
  currency: string
}

interface ImContentType {
  attributes: Attributes3
}

interface Attributes3 {
  term: string
  label: string
}

interface Rights {
  label: string
}

interface Title {
  label: string
}

interface Link {
  attributes: Attributes4
}

interface Attributes4 {
  rel: string
  type: string
  href: string
}

interface Id {
  label: string
  attributes: Attributes5
}

interface Attributes5 {
  'im:id': string
}

interface ImArtist {
  label: string
  attributes?: Attributes6
}

interface Attributes6 {
  href: string
}

interface Category {
  attributes: Attributes7
}

interface Attributes7 {
  'im:id': string
  term: string
  scheme: string
  label: string
}

interface ImReleaseDate {
  label: string
  attributes: Attributes8
}

interface Attributes8 {
  label: string
}
