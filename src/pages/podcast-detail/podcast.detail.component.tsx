import { LayoutPodcast } from '@/layout/podcast/layout-podcast.component'
import { useParams } from 'react-router-dom'

export const PodcastDetail = () => {
  const { podcastId } = useParams()

  return (
    <LayoutPodcast>
      <div>This is podcast {podcastId}</div>
    </LayoutPodcast>
  )
}
