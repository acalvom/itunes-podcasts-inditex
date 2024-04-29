import { Query } from '@/shared/application/usecase/query'
import { Id } from '@/shared/domain/interfaces/id'
import { Episode } from '../domain/episode'
import { PodcastRepository } from '../domain/podcast.repository'

export class GetEpisodesByPodcastIdQuery implements Query<Episode[], Id> {
  constructor(private podcastRepository: PodcastRepository) {}

  execute(id: Id): Promise<Episode[]> {
    return this.podcastRepository.getEpisodesById(id)
  }
}
