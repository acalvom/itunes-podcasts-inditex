import { LayoutTwoColumns } from '@/layout/two-columns/layout-two-columns.component'
import { EpisodeList } from '@/models/podcasts/ui/components/episode/episode-list.component'
import { PodcastDetailCard } from '@/models/podcasts/ui/components/podcast/podcast-detail-card.component'
import { useParams } from 'react-router-dom'

export const PodcastDetail = () => {
  const params = useParams()
  const podcastId = params.podcastId || ''

  return (
    <LayoutTwoColumns>
      <PodcastDetailCard podcastId={podcastId} />
      <EpisodeList podcastId={podcastId} />
    </LayoutTwoColumns>
  )
}
