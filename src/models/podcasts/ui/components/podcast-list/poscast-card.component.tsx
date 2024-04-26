import { Podcast } from '@/models/podcasts/domain/podcast'

export const PodcastCard = ({ podcast }: { podcast: Podcast }) => {
  return (
    <div key={podcast.id} className="relative w-1/2 max-w-64 md:w-1/3">
      <div className="absolute left-1/2 top-2 h-32 w-32 -translate-x-1/2 transform">
        <img src={podcast.image} className=" rounded-full border-4 border-white" />
      </div>

      <div className="mt-20 overflow-hidden rounded bg-white pt-10 shadow-lg">
        <div className="px-6 py-4">
          <div className="mb-2 text-center text-xl font-bold">{podcast.name}</div>
          <p className="text-center text-base text-gray-700">{podcast.artist}</p>
        </div>
      </div>
    </div>
  )
}
