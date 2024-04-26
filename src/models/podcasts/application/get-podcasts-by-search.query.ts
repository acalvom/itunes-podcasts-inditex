import { Query } from '@/shared/application/usecase/query'
import { Podcast } from '../domain/podcast'
import { PodcastRepository } from '../domain/podcast.repository'

export class GetPodcastsBySearchQuery implements Query<Podcast[], string> {
  constructor(private podcastRepository: PodcastRepository) {}

  execute(search: string): Promise<Podcast[]> {
    return this.podcastRepository.getBySearch(search)
  }
}
