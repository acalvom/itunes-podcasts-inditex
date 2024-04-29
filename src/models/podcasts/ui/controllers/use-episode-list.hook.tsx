import { useEffect, useState } from 'react'
import { Episode } from '../../domain/episode'
import { PodcastLocator } from '../di/podcast.locator'

export function useEpisodeList(podcastId: string) {
  const [episodes, setEpisodes] = useState<Episode[]>([])
  const [isFetching, setIsFetching] = useState(true)

  const getEpisodesByPodcastId = async (id: string) => {
    const getEpisodesByPodcastIdQuery = PodcastLocator.getEpisodesByPodcastIdQuery()
    const episodes = await getEpisodesByPodcastIdQuery.execute(id)
    setEpisodes(episodes)
    setIsFetching(false)
  }

  useEffect(() => {
    getEpisodesByPodcastId(podcastId)
  }, [podcastId])

  return { episodes, hasEpisodes: episodes.length > 0, isFetching }
}
