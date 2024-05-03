import { Episode } from '@/models/podcasts/domain/episode'
import { EpisodeHeader } from './episode-header.component'
import { EpisodeRow } from './episode-row.component'

interface EpisodeGridProps {
  episodes: Episode[]
  podcastId: string
}

export const EpisodeGrid = ({ episodes, podcastId }: EpisodeGridProps) => {
  return (
    <div className="flex w-full flex-wrap justify-center gap-4">
      <div className="w-full rounded-sm px-4 py-8 shadow-xl" data-testid="episode-grid">
        <EpisodeHeader />
        {episodes.map((episode) => (
          <EpisodeRow key={episode.id} episode={episode} podcastId={podcastId} />
        ))}
      </div>
    </div>
  )
}
