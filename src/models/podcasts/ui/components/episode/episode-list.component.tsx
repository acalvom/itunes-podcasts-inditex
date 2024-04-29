import { Loading } from '@/shared/ui/components/loading/loading.component'
import { Title } from '@/shared/ui/components/title/title.component'
import { useEpisodeList } from '../../controllers/use-episode-list.hook'
import { EpisodeGrid } from './episode-grid.component'

export const EpisodeList = ({ podcastId }: { podcastId: string }) => {
  const { episodes, hasEpisodes, isFetching } = useEpisodeList(podcastId)

  return (
    <>
      {isFetching && <Loading />}
      {!isFetching && <Title title={`Episodes: ${episodes.length}`} />}
      {hasEpisodes ? (
        <EpisodeGrid episodes={episodes} podcastId={podcastId} />
      ) : (
        <p className="my-8 w-full text-center text-2xl font-bold text-blue-main md:text-4xl">
          No episodes to show
        </p>
      )}
    </>
  )
}
