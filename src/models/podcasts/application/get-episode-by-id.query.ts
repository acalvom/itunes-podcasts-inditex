import { Query } from '@/shared/application/usecase/query'
import { Id } from '@/shared/domain/interfaces/id'
import { Episode } from '../domain/episode'
import { PodcastRepository } from '../domain/podcast.repository'

type Params = {
  id: Id
  podcastId: Id
}

export class GetEpisodeByIdQuery implements Query<Episode | undefined, Params> {
  constructor(private podcastRepository: PodcastRepository) {}

  execute(params: Params): Promise<Episode | undefined> {
    return this.podcastRepository.getEpisodeById(params.id, params.podcastId)
  }
}
