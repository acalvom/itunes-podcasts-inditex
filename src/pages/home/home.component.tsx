import { Layout } from '@/layout/layout.component'
import { PodcastList } from '@/models/podcasts/ui/components/podcast-list/podcast-list.component'

export const Home = () => {
  return (
    <Layout>
      <h1>Home</h1>
      <PodcastList />
    </Layout>
  )
}
