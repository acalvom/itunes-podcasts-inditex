import { Badge } from '@/components/badge/badge.component'
import { SearchInput } from '@/components/search/search-input.component'

interface PodcastSearchProps {
  count: number
  setSearch: (search: string) => void
}

export const PodcastSearch = ({ count, setSearch }: PodcastSearchProps) => {
  return (
    <div className="relative mx-auto mb-4 mt-2 flex w-56 flex-row gap-2 md:ml-auto md:mr-0 ">
      <Badge content={count} />
      <SearchInput placeholder="Filter podcasts..." onSearch={(e) => setSearch(e.target.value)} />
    </div>
  )
}
