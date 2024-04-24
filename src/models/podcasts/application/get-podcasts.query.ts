import { Query } from '@/shared/application/usecase/query'
import { Podcast } from '../domain/podcast'
import { PodcastRepository } from '../domain/podcast.repository'

export class GetPodcastsQuery implements Query<Podcast[]> {
  constructor(private podcastRepository: PodcastRepository) {}

  execute(): Promise<Podcast[]> {
    return this.podcastRepository.getAll()
  }
}
