import { createClient } from '@/lib/http-client'
import { StoragePodcastRepository } from '@/shared/infrastrucutre/storage/local-storage.repository'
import { GetEpisodeByIdQuery } from '../../application/get-episode-by-id.query'
import { GetEpisodesByPodcastIdQuery } from '../../application/get-episodes-by-podcast-id.query'
import { GetPodcastByIdQuery } from '../../application/get-podcast-by-id.query'
import { GetPodcastsBySearchQuery } from '../../application/get-podcasts-by-search.query'
import { GetPodcastsQuery } from '../../application/get-podcasts.query'
import { ApiPodcastRepository } from '../../infrastructure/api-podcast.respository'

export class PodcastLocator {
  private static http = createClient({ apiUrl: import.meta.env.VITE_API_URL })
  private static storage = new StoragePodcastRepository()

  static apiPodcastRepository = new ApiPodcastRepository(this.http, this.storage)

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

  static getEpisodeByIdQuery() {
    return new GetEpisodeByIdQuery(this.apiPodcastRepository)
  }
}
