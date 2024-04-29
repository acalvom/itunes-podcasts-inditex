import { Loading } from '@/shared/ui/components/loading/loading.component'
import { usePodcast } from '../../controllers/use-podcast-by-id.hook'

export const PodcastDetailCard = ({ podcastId }: { podcastId: string }) => {
  const { podcast, isFetching } = usePodcast(podcastId)

  return (
    <>
      {isFetching && <Loading />}
      {podcast && (
        <div className="flex h-min flex-col divide-y rounded-sm px-4 py-8 shadow-xl">
          <div className="my-3 flex justify-center rounded-lg">
            <img className="max-w-48 rounded-lg" src={podcast.image} alt={podcast.name} />
          </div>
          <div className="flex flex-col p-4 align-middle">
            <p className="font-semibold">{podcast.name}</p>
            <p className="italic">by {podcast.artist}</p>
          </div>
          <div className="flex flex-col p-2 align-middle">
            <p className="text-sm font-semibold">Description:</p>
            <p className="text-sm font-light italic">{podcast.description}</p>
          </div>
        </div>
      )}
    </>
  )
}
