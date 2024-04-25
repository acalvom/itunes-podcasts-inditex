import { useEffect, useState } from 'react'
import { Podcast } from '../../domain/podcast'
import { PodcastLocator } from '../di/podcast.locator'

export function usePodcastList() {
  const [podcasts, setPodcasts] = useState<Podcast[]>([])

  const getPodcasts = async () => {
    const getPodcastsQuery = PodcastLocator.getPodcastsQuery()
    const podcasts = await getPodcastsQuery.execute()
    setPodcasts(podcasts)
  }

  useEffect(() => {
    getPodcasts()
  }, [])

  return { podcasts }
}
