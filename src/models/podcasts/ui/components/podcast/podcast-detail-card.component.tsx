import { Loading } from '@/shared/ui/components/loading/loading.component'
import { Link } from 'react-router-dom'
import { usePodcast } from '../../controllers/use-podcast-by-id.hook'

export const PodcastDetailCard = ({ podcastId }: { podcastId: string }) => {
  const { podcast, isFetching } = usePodcast(podcastId)

  return (
    <>
      {isFetching && <Loading />}
      {podcast && (
        <div className="flex h-min flex-col divide-y rounded-sm px-4 py-8 shadow-xl">
          <div className="my-3 flex justify-center rounded-lg">
            <img
              className="max-w-48 rounded-lg"
              src={podcast.image}
              alt={podcast.name}
              data-testid="podcast-image"
            />
          </div>
          <div className="flex flex-col p-4 align-middle">
            <Link to={`/podcast/${podcast.id}`} className="hover:text-blue-main hover:underline">
              <p className="font-semibold" data-testid="podcast-name">
                {podcast.name}
              </p>
            </Link>
            <p className="italic" data-testid="podcast-artist">
              by {podcast.artist}
            </p>
          </div>
          <div className="flex flex-col p-2 align-middle">
            <p className="text-sm font-semibold">Description:</p>
            <p className="text-sm font-light italic" data-testid="podcast-description">
              {podcast.description}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
