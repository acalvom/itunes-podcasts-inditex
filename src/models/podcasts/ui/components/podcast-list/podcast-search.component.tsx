import { Badge } from '@/components/badge/badge.component'
import { SearchInput } from '@/components/badge/search/search-input.component'

interface PodcastSearchProps {
  count: number
  setSearch: (search: string) => void
}

export const PodcastSearch = ({ count, setSearch }: PodcastSearchProps) => {
  return (
    <div className="flex flex-row relative gap-2 w-56 mt-2 mb-4 mx-auto md:mr-0 md:ml-auto ">
      <Badge content={count} />
      <SearchInput placeholder="Filter podcasts..." onSearch={(e) => setSearch(e.target.value)} />
    </div>
  )
}
