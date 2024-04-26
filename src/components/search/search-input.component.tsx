interface SearchInputProps {
  placeholder: string
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput = ({ placeholder, onSearch }: SearchInputProps) => {
  return (
    <input
      type="search"
      className="block p-2.5 w-full text-sm text-blue-dark  rounded-lg border-s-main  border border-gray-300 focus:ring-focus focus:border-ring-focus focus:border-gray-400 focus-visible:outline-none "
      placeholder={placeholder}
      onChange={onSearch}
      required
    />
  )
}
