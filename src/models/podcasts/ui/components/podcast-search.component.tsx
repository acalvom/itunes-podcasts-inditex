import { Badge } from '@/shared/ui/components/badge/badge.component'
import { SearchInput } from '@/shared/ui/components/search/search-input.component'
import { useDebounce } from '@/shared/ui/controllers/use-debounce.hook'

interface PodcastSearchProps {
  count: number
  setSearch: (search: string) => void
}

export const PodcastSearch = ({ count, setSearch }: PodcastSearchProps) => {
  const handleOnSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)
  const { debounceSearch } = useDebounce(handleOnSearch, 300)

  return (
    <div className="relative mx-auto mb-4 mt-2 flex h-10 w-56 flex-row gap-2 md:ml-auto md:mr-0">
      <Badge content={count} />
      <SearchInput placeholder="Filter podcasts..." onSearch={debounceSearch} />
    </div>
  )
}
