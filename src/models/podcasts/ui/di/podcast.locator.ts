import { GetEpisodesByPodcastIdQuery } from '../../application/get-episodes-by-podcast-id.query'
import { GetPodcastByIdQuery } from '../../application/get-podcast-by-id.query'
import { GetPodcastsBySearchQuery } from '../../application/get-podcasts-by-search.query'
import { GetPodcastsQuery } from '../../application/get-podcasts.query'
import { ApiPodcastRepository } from '../../infrastructure/api-podcast.respository'

export class PodcastLocator {
  static apiPodcastRepository = new ApiPodcastRepository()

  static getPodcastsQuery() {
    return new GetPodcastsQuery(this.apiPodcastRepository)
  }

  static getPodcastsBySearchQuery() {
    return new GetPodcastsBySearchQuery(this.apiPodcastRepository)
  }

  static getPodcastByIdQuery() {
    return new GetPodcastByIdQuery(this.apiPodcastRepository)
  }

  static getEpisodesByPodcastIdQuery() {
    return new GetEpisodesByPodcastIdQuery(this.apiPodcastRepository)
  }
}
