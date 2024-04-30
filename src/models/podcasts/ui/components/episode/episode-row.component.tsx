import { Episode } from '@/models/podcasts/domain/episode'
import { Datetime } from '@/shared/domain/dates/datetime'
import { Link } from 'react-router-dom'

interface EpisodeRowProps {
  episode: Episode
  podcastId: string
}

export const EpisodeRow = ({ episode, podcastId }: EpisodeRowProps) => {
  return (
    <div className="grid-cols-50/30/20 md:grid-cols-60/20/15 border-grey-main grid gap-2 border-t-2 px-2 py-2 odd:bg-white even:bg-gray-100">
      <Link
        to={`/podcast/${podcastId}/episode/${episode.id}`}
        className="text-blue-main hover:underline"
      >
        <p className="font-light">{episode.name}</p>
      </Link>
      <p className="ml-2 text-center font-light tracking-wide md:text-start">
        {Datetime.getDateFormatted(episode.releaseDate)}
      </p>
      <p className="ml-2 text-center font-light tracking-wide">
        {Datetime.getLenghtfromMs(episode.duration)}
      </p>
    </div>
  )
}
