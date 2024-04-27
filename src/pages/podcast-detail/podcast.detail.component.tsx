import { Layout } from '@/layout/layout.component'
import { LayoutPodcast } from '@/models/podcasts/ui/layout/layout-podcast.component'
import { useParams } from 'react-router-dom'

export const PodcastDetail = () => {
  const { podcastId } = useParams()

  // TODO: refacotr this code. Add not found page
  return (
    <Layout>
      {podcastId !== undefined ? (
        <LayoutPodcast podcastId={podcastId}>
          <div>Episodes for podcast: {podcastId}</div>
        </LayoutPodcast>
      ) : (
        <p>No existe</p>
      )}
    </Layout>
  )
}
