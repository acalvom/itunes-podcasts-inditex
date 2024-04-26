import { useState } from 'react'
import { usePodcastList } from '../../controllers/use-podcast-list.hook'
import { PodcastCard } from './poscast-card.component'

export const PodcastList = () => {
  const [search, setSearch] = useState('')
  const { podcasts } = usePodcastList(search)

  return (
    <>
      <div className="flex flex-row relative w-56 mt-2 mb-4 mx-auto md:mr-0 md:ml-auto ">
        <input
          type="search"
          className="block p-2.5 w-full  text-sm text-blue-dark  rounded-lg border-s-main  border border-gray-300 focus:ring-focus focus:border-ring-focus focus:border-gray-400 focus-visible:outline-none "
          placeholder="Filter podcasts..."
          onChange={(e) => setSearch(e.target.value)}
          required
          data-testid="search-input"
        />
      </div>
      <div className="container mx-auto flex flex-wrap justify-center gap-4">
        {podcasts.map((podcast) => (
          <PodcastCard key={podcast.id} podcast={podcast} />
        ))}
      </div>
    </>
  )
}
