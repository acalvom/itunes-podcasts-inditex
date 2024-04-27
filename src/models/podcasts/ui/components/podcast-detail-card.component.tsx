import { Podcast } from '@/models/podcasts/domain/podcast'

export const PodcastDetailCard = ({ podcastId }: { podcastId: string }) => {
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
    <div className="flex flex-col divide-y rounded-sm  px-4 py-8 shadow-xl">
      <div className="my-3 flex justify-center rounded-lg">
        <img className="max-w-48 rounded-lg" src={podcast.image} alt={podcast.name} />
      </div>
      <div className="flex flex-col p-4 align-middle">
        <p className="font-semibold">{podcast.name}</p>
        <p className="italic">by {podcast.artist}</p>
      </div>
      <div className="flex flex-col p-2 align-middle">
        <p className="text-sm font-semibold">Description:</p>
        <p className="text-sm font-light italic">{podcast.description}</p>
      </div>
    </div>
  )
}
