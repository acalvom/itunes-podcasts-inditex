import { Podcast } from '@/models/podcasts/domain/podcast'
import { Link } from 'react-router-dom'

export const PodcastCard = ({ podcast }: { podcast: Podcast }) => {
  return (
    <Link to={`/podcast/${podcast.id}`} className="relative w-1/2 max-w-64 md:w-1/3">
      <div className="absolute left-1/2 top-2 h-32 w-32 -translate-x-1/2 transform">
        <img src={podcast.image} className=" rounded-full border-4 border-white" />
      </div>

      <div className="mt-20 overflow-hidden rounded-md bg-white pt-10 shadow-xl">
        <div className="px-6 py-4">
          <h3 className="mb-2 text-center text-xl font-bold" data-testid="podcast-name">
            {podcast.name}
          </h3>
          <p className="text-center text-base text-gray-700" data-testid="podcast-artist">
            {podcast.artist}
          </p>
        </div>
      </div>
    </Link>
  )
}
