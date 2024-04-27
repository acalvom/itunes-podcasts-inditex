import { Layout } from '@/layout/layout.component'
import { PodcastList } from '@/models/podcasts/ui/components/podcast-list.component'

export const Home = () => {
  return (
    <Layout>
      <PodcastList />
    </Layout>
  )
}
