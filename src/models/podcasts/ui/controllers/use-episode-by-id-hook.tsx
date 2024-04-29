import { Id } from '@/shared/domain/interfaces/id'
import { useEffect, useState } from 'react'
import { Episode } from '../../domain/episode'
import { PodcastLocator } from '../di/podcast.locator'

export function useEpisode(id: Id, podcastId: Id) {
  const [episode, setEpisode] = useState<Episode>()
  const [isFetching, setIsFetching] = useState(true)

  const getEpisodeById = async (id: Id, podcastId: Id) => {
    const getEpisodeByIdQuery = PodcastLocator.getEpisodeByIdQuery()
    const episode = await getEpisodeByIdQuery.execute({ id, podcastId })
    setEpisode(episode)
    setIsFetching(false)
  }

  useEffect(() => {
    getEpisodeById(id, podcastId)
  }, [id, podcastId])

  return { episode, isFetching }
}
