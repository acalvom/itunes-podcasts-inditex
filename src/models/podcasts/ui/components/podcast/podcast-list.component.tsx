import { Loading } from '@/shared/ui/components/loading/loading.component'
import { useState } from 'react'
import { usePodcastList } from '../../controllers/use-podcast-list.hook'
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
        <div
          className="container mx-auto flex flex-wrap justify-center gap-4"
          data-testid="podcast-list"
        >
          {podcasts.map((podcast) => (
            <PodcastCard podcast={podcast} key={podcast.id} />
          ))}
        </div>
      ) : (
        <p className="my-8 w-full text-center text-2xl font-bold text-blue-main md:text-4xl">
          No podcasts to show
        </p>
      )}
    </>
  )
}
