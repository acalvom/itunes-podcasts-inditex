import { LayoutTwoColumns } from '@/layout/two-columns/layout-two-columns.component'
import { EpisodeDetailCard } from '@/models/podcasts/ui/components/episode/episode-detail-card.component'
import { PodcastDetailCard } from '@/models/podcasts/ui/components/podcast/podcast-detail-card.component'
import { useParams } from 'react-router-dom'

export const EpisodeDetail = () => {
  const params = useParams()
  const podcastId = params.podcastId || ''
  const episodeId = params.episodeId || ''

  return (
    <LayoutTwoColumns>
      <PodcastDetailCard podcastId={podcastId} />
      <EpisodeDetailCard episodeId={episodeId} podcastId={podcastId} />
    </LayoutTwoColumns>
  )
}
