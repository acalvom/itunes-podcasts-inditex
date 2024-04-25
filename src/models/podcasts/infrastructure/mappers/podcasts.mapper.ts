import { IPodcastPrimitives } from '../../domain/interfaces/podcast-primitives'
import { PodcastAPIResponse } from '../dtos/podcast-api-response.dto'

export function apiResponseToPrimitives(apiResponse: PodcastAPIResponse): IPodcastPrimitives[] {
  const jsonPodcasts: IPodcastPrimitives[] = apiResponse.feed.entry.map((item) => ({
    id: item.id.label,
    name: item['im:name'].label,
    artist: item['im:artist'].label,
    image: { url: item['im:image'][2].label, height: item['im:image'][2].attributes.height },
  }))

  return jsonPodcasts
}
