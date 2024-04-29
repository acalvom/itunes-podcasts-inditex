import { Episode, IEpisodePrimitives } from '../../domain/episode'
import { Podcast } from '../../domain/podcast'
import { PodcastAPIResponse } from '../dtos/podcast-api-response.dto'
import { EpisodeAPIResponse, EpisodesAPIResponse } from '../dtos/podcast-episodes-api-response.dto'

export function rawToPodcast(apiResponse: PodcastAPIResponse): Podcast[] {
  return apiResponse.feed.entry.map((item) => ({
    id: item.id.attributes['im:id'],
    name: item['im:name'].label,
    artist: item['im:artist'].label,
    image: item['im:image'][2].label,
    description: item.summary.label,
  }))
}

export function rawToEpisodes(apiResponse: EpisodesAPIResponse): Episode[] {
  return apiResponse.results.slice(1).map((item: EpisodeAPIResponse) => {
    const episodeJson: IEpisodePrimitives = {
      id: item.trackId,
      name: item.trackName,
      url: item.episodeUrl,
      duration: item.trackTimeMillis,
      releaseDate: item.releaseDate,
      description: item.description,
    }

    return Episode.fromPrimitives(episodeJson)
  })
}
