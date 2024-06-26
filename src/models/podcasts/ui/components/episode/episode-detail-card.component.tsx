import { Loading } from '@/shared/ui/components/loading/loading.component'
import { useEpisode } from '../../controllers/use-episode-by-id-hook'

interface EpisodeDetailCardProps {
  episodeId: string
  podcastId: string
}

export const EpisodeDetailCard = ({ episodeId, podcastId }: EpisodeDetailCardProps) => {
  const { episode, isFetching } = useEpisode(episodeId, podcastId)

  return (
    <>
      {isFetching && <Loading />}
      {episode && (
        <div className="flex h-min flex-col gap-2 divide-y rounded-sm px-4 py-8 shadow-xl">
          <p className="mb-2 text-xl font-bold" data-testid="episode-name">
            {episode.name}
          </p>
          <p className="py-2 text-sm font-light italic" data-testid="episode-description">
            {episode.description}
          </p>
          <audio
            src={episode.url}
            controls
            muted
            className="w-full pt-4"
            data-testid="episode-audio"
          ></audio>
        </div>
      )}
    </>
  )
}
