import { Podcast } from '../../domain/podcast'
import { PodcastAPIResponse } from '../dtos/podcast-api-response.dto'

export function rawToPodcast(apiResponse: PodcastAPIResponse): Podcast[] {
  return apiResponse.feed.entry.map((item) => ({
    id: item.id.label,
    name: item['im:name'].label,
    artist: item['im:artist'].label,
    image: item['im:image'][2].label,
  }))
}
