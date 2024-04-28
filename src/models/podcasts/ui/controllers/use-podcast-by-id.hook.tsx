import { Id } from '@/shared/domain/interfaces/id'
import { useEffect, useState } from 'react'
import { Podcast } from '../../domain/podcast'
import { PodcastLocator } from '../di/podcast.locator'

export function usePodcast(podcastId: Id) {
  const [podcast, setPodcast] = useState<Podcast>()
  const [isFetching, setIsFetching] = useState(true)

  const getPodcastById = async (id: Id) => {
    const getPodcastByIdQuery = PodcastLocator.getPodcastByIdQuery()
    const podcast = await getPodcastByIdQuery.execute(id)
    setPodcast(podcast)
    setIsFetching(false)
  }

  useEffect(() => {
    getPodcastById(podcastId)
  }, [podcastId])

  return { podcast, isFetching }
}
