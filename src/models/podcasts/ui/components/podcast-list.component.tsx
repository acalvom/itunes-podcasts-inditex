import { useState } from 'react'
import { usePodcastList } from '../controllers/use-podcast-list.hook'
import { PodcastSearch } from './podcast-search.component'
import { PodcastCard } from './poscast-card.component'

export const PodcastList = () => {
  const [search, setSearch] = useState('')
  const { podcasts } = usePodcastList(search)

  return (
    <>
      <PodcastSearch count={podcasts.length} setSearch={setSearch} />

      <div className="container mx-auto flex flex-wrap justify-center gap-4">
        {podcasts.map((podcast) => (
          <PodcastCard podcast={podcast} key={podcast.id} />
        ))}
      </div>
    </>
  )
}
