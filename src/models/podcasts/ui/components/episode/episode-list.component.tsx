import { Loading } from '@/shared/ui/components/loading/loading.component'
import { useEpisodeList } from '../../controllers/use-episode-list.hook'
import { EpisodeRow } from './episode-row.component'

export const EpisodeList = ({ podcastId }: { podcastId: string }) => {
  const { episodes, hasEpisodes, isFetching } = useEpisodeList(podcastId)

  // TODO: new component
  return (
    <>
      {isFetching && <Loading />}
      {!isFetching && <h3>Number of episodes: {episodes.length}</h3>}
      {hasEpisodes ? (
        <div className="container mx-auto flex flex-wrap justify-center gap-4">
          <div className="rounded-sm px-4 py-8 shadow-xl">
            <div className="grid-cols-50/30/20 md:grid-cols-60/20/15 grid gap-2 px-2 py-2 ">
              <p className="font-semibold">Title</p>
              <p className="text-center font-semibold md:text-start ">Date</p>
              <p className="text-center font-semibold">Duration</p>
            </div>
            {episodes.map((episode) => (
              <EpisodeRow key={episode.id} episode={episode} podcastId={podcastId} />
            ))}
          </div>
        </div>
      ) : (
        <p className="my-8 w-full text-center text-2xl font-bold text-blue-main md:text-4xl">
          No episodes to show
        </p>
      )}
    </>
  )
}
