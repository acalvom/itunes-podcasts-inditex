import { Id } from '@/shared/domain/interfaces/id'
import { Layout } from '../../../../layout/layout.component'
import { Podcast } from '../../domain/podcast'
import { MainDetail } from './main/main-podcast.component'
import { SideBar } from './sidebar/sidebar.component'

interface LayoutPodcastProps {
  podcastId: Id
  children: JSX.Element | JSX.Element[]
}

export const LayoutPodcast = ({ podcastId, children }: LayoutPodcastProps) => {
  // TODO: wip usePodcastById
  // const { podcast } = usePodcastById(podcastId)
  const podcast: Podcast = {
    id: podcastId,
    artist: 'The Joe Budden Network',
    name: 'The Joe Budden Podcast',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png',
    description:
      'Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.',
  }

  return (
    <Layout>
      <SideBar podcast={podcast} />
      <MainDetail>{children}</MainDetail>
    </Layout>
  )
}
