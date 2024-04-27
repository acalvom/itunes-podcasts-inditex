import { useEffect, useState } from 'react'
import { Podcast } from '../../domain/podcast'
import { PodcastLocator } from '../di/podcast.locator'

export function usePodcastList(search: string = '') {
  const [podcasts, setPodcasts] = useState<Podcast[]>([])
  const [isFetching, setIsFetching] = useState(true)

  const getPodcasts = async () => {
    const getPodcastsQuery = PodcastLocator.getPodcastsQuery()
    const podcasts = await getPodcastsQuery.execute()
    setPodcasts(podcasts)
    setIsFetching(false)
  }

  const getPodcastsBySearch = async (str: string) => {
    const getPodcastsBySearchQuery = PodcastLocator.getPodcastsBySearchQuery()
    const filteredPodcasts = await getPodcastsBySearchQuery.execute(str)
    setPodcasts(filteredPodcasts)
    setIsFetching(false)
  }

  useEffect(() => {
    search === '' ? getPodcasts() : getPodcastsBySearch(search)
  }, [search])

  return { podcasts, hasPodcasts: podcasts.length > 0, isFetching }
}
