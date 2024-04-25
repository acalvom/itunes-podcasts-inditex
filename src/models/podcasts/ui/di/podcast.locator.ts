import { GetPodcastsQuery } from '../../application/get-podcasts.query'
import { ApiPodcastRepository } from '../../infrastructure/api-podcast.respository'

export class PodcastLocator {
  static apiPodcastRepository = new ApiPodcastRepository()

  static getPodcastsQuery() {
    return new GetPodcastsQuery(this.apiPodcastRepository)
  }
}
