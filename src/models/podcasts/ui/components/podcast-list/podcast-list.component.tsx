import { usePodcastList } from '../../controllers/use-podcast-list.hook'
import { PodcastCard } from './poscast-card.component'

export const PodcastList = () => {
  const { podcasts } = usePodcastList()

  return (
    <div className="container mx-auto flex flex-wrap justify-center gap-4">
      {podcasts.map((podcast) => (
        <PodcastCard podcast={podcast} />
      ))}
    </div>
  )
}
