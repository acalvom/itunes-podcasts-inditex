interface SearchInputProps {
  placeholder: string
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput = ({ placeholder, onSearch }: SearchInputProps) => {
  return (
    <input
      type="search"
      className="border-s-main focus:ring-focus focus:border-ring-focus block w-full  rounded-lg border  border-gray-300 p-2.5 text-sm text-blue-dark focus:border-gray-400 focus-visible:outline-none "
      placeholder={placeholder}
      onChange={onSearch}
      required
    />
  )
}
