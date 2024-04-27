import { Layout } from '../base/layout-base.component'
import { MainDetail } from './main/main-detail.component'
import { SideBar } from './sidebar/sidebar.component'

interface LayoutPodcastProps {
  children: JSX.Element | JSX.Element[]
}

export const LayoutPodcast = ({ children }: LayoutPodcastProps) => {
  return (
    <Layout>
      <SideBar />
      <MainDetail>{children}</MainDetail>
    </Layout>
  )
}
