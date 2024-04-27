import { Id } from '@/shared/domain/interfaces/id'
import { Layout } from '../../../../layout/layout.component'
import { MainDetail } from './main/main-podcast.component'
import { SideBar } from './sidebar/sidebar.component'

interface LayoutPodcastProps {
  podcastId: Id
  children: JSX.Element | JSX.Element[]
}

export const LayoutPodcast = ({ podcastId, children }: LayoutPodcastProps) => {
  // TODO: wip usePodcastById
  const { podcast } = usePodcastById(podcastId)

  return (
    <Layout>
      <SideBar podcast={podcast} />
      <MainDetail>{children}</MainDetail>
    </Layout>
  )
}
