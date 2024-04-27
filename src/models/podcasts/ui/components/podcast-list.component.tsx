import { Loading } from '@/components/loading/loading.component'
import { useState } from 'react'
import { usePodcastList } from '../controllers/use-podcast-list.hook'
import { PodcastSearch } from './podcast-search.component'
import { PodcastCard } from './poscast-card.component'

export const PodcastList = () => {
  const [search, setSearch] = useState('')
  const { podcasts, hasPodcasts, isFetching } = usePodcastList(search)

  return (
    <>
      {isFetching && <Loading />}
      {!isFetching && <PodcastSearch count={podcasts.length} setSearch={setSearch} />}
      {hasPodcasts ? (
        <div className="container mx-auto flex flex-wrap justify-center gap-4">
          {podcasts.map((podcast) => (
            <PodcastCard podcast={podcast} key={podcast.id} />
          ))}
        </div>
      ) : (
        <p className="text-blue-main text-center text-2xl md:text-4xl font-bold my-8">
          No podcasts to show
        </p>
      )}
    </>
  )
}
