import { debounce } from 'lodash'
import { useEffect, useMemo } from 'react'

export function useDebounce(
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  timeout: number = 500
) {
  const debounceSearch = useMemo(() => debounce(handleOnChange, timeout), [handleOnChange, timeout])

  useEffect(() => debounceSearch.cancel())

  return { debounceSearch }
}
