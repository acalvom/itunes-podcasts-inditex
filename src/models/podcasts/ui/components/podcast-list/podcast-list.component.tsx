import { usePodcastList } from '../../controllers/use-podcast-list.hook'

export const PodcastList = () => {
  const { podcasts } = usePodcastList()
  console.log('🎨 ☞ podcasts:', podcasts)

  return <h2>Podcast List</h2>
}
