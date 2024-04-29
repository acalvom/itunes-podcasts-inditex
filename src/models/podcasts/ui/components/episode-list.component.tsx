import { Datetime } from '@/shared/domain/dates/datetime'
import { Loading } from '@/shared/ui/components/loading/loading.component'
import { useEpisodeList } from '../controllers/use-episode-list.hook'

export const EpisodeList = ({ podcastId }: { podcastId: string }) => {
  const { episodes, hasEpisodes, isFetching } = useEpisodeList(podcastId)
  console.log('🎨 ☞ episodes:', episodes)

  return (
    <>
      {isFetching && <Loading />}
      {!isFetching && <h3>Number of episodes: {episodes.length}</h3>}
      {hasEpisodes ? (
        <div className="container mx-auto flex flex-wrap justify-center gap-4">
          <ul>
            {episodes.map((episode) => (
              <li key={episode.id}>
                <span>{episode.name} - </span>
                <span>{Datetime.getLenghtfromMs(episode.duration)} - </span>
                <span>{Datetime.getDateFormatted(episode.releaseDate)}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="my-8 w-full text-center text-2xl font-bold text-blue-main md:text-4xl">
          No episodes to show
        </p>
      )}
    </>
  )
}
