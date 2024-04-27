import { LayoutTwoColumns } from '@/layout/two-columns/layout-two-columns.component'
import { PodcastDetailCard } from '@/models/podcasts/ui/components/podcast-detail-card.component'
import { useParams } from 'react-router-dom'

export const PodcastDetail = () => {
  const params = useParams()
  const podcastId = params.podcastId || ''

  return (
    <LayoutTwoColumns>
      <PodcastDetailCard podcastId={podcastId} />
      <div>Episodes for podcast: {podcastId}</div>
    </LayoutTwoColumns>
  )
}
