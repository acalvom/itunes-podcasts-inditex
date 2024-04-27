import { Layout } from '@/layout/layout.component'
import { LayoutPodcast } from '@/models/podcasts/ui/layout/layout-podcast.component'
import { useParams } from 'react-router-dom'

export const PodcastDetail = () => {
  const params = useParams()
  const podcastId = params.podcastId || ''

  return (
    <Layout>
      <LayoutPodcast podcastId={podcastId}>
        <div>Episodes for podcast: {podcastId}</div>
      </LayoutPodcast>
    </Layout>
  )
}
