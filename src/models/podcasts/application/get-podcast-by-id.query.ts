import { Query } from '@/shared/application/usecase/query'
import { Id } from '@/shared/domain/interfaces/id'
import { Podcast } from '../domain/podcast'
import { PodcastRepository } from '../domain/podcast.repository'

export class GetPodcastByIdQuery implements Query<Podcast | undefined, Id> {
  constructor(private podcastRepository: PodcastRepository) {}

  execute(id: Id): Promise<Podcast | undefined> {
    return this.podcastRepository.getById(id)
  }
}
