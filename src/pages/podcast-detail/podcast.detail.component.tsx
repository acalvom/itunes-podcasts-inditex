import { useParams } from 'react-router-dom'

export const PodcastDetail = () => {
  const { podcastId } = useParams()

  return <div>This is podcast {podcastId}</div>
}
