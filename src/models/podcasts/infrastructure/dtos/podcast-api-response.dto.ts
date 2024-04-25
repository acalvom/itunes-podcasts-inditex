export interface AxiosResponse {
  data: Data
  status: number
  statusText: string
  headers: Headers
  config: Config
  request: Request
}

export interface Data {
  feed: Feed
}

export interface PodcastAPIResponse {
  feed: Feed
}

interface Feed {
  author: Author
  entry: Entry[]
  updated: Updated
  rights: Rights2
  title: Title2
  icon: Icon
  link: Link2[]
  id: Id2
}

interface Author {
  name: Name
  uri: Uri
}

interface Name {
  label: string
}

interface Uri {
  label: string
}

export interface Entry {
  'im:name': ImName
  'im:image': ImImage[]
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

interface ImImage {
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

interface Updated {
  label: string
}

interface Rights2 {
  label: string
}

interface Title2 {
  label: string
}

interface Icon {
  label: string
}

interface Link2 {
  attributes: Attributes9
}

interface Attributes9 {
  rel: string
  type?: string
  href: string
}

interface Id2 {
  label: string
}

interface Headers {
  'cache-control': string
  'content-length': string
  'content-type': string
}

interface Config {
  transitional: Transitional
  adapter: string[]
  transformRequest: unknown[]
  transformResponse: unknown[]
  timeout: number
  xsrfCookieName: string
  xsrfHeaderName: string
  maxContentLength: number
  maxBodyLength: number
  env: Env
  headers: Headers2
  method: string
  url: string
}

interface Transitional {
  silentJSONParsing: boolean
  forcedJSONParsing: boolean
  clarifyTimeoutError: boolean
}

interface Env {}

interface Headers2 {
  Accept: string
}

interface Request {}
