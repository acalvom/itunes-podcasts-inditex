export interface EpisodesAPIResponse {
  resultCount: number
  results: EpisodeAPIResponse[]
}

export type EpisodeAPIResponse = {
  collectionViewUrl: string
  trackTimeMillis: number
  feedUrl: string
  closedCaptioning: string
  collectionId: number
  collectionName: string
  artworkUrl160: string
  episodeFileExtension: string
  episodeContentType: string
  releaseDate: string
  shortDescription: string
  trackId: number
  trackName: string
  contentAdvisoryRating: string
  trackViewUrl: string
  artworkUrl60: string
  artistViewUrl: string
  artistIds: number[]
  genres: Genre[]
  episodeGuid: string
  description: string
  previewUrl: string
  country: string
  episodeUrl: string
  artworkUrl600: string
  kind: string
  wrapperType: string
}

interface Genre {
  name: string
  id: string
}
