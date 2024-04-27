import { Podcast } from '@/models/podcasts/domain/podcast'

export const SideBar = ({ podcast }: { podcast: Podcast }) => {
  return (
    <div className="flex flex-col divide-y rounded-sm px-4 py-8 shadow-xl md:mr-8 md:w-1/3 lg:w-1/4">
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
