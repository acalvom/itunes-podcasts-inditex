import { Layout } from '@/layout/base/layout-base.component'
import { PodcastList } from '@/models/podcasts/ui/components/podcast-list.component'

export const Home = () => {
  return (
    <Layout>
      <PodcastList />
    </Layout>
  )
}
