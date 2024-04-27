import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header
      className="fixed top-0 z-10 w-full border-b border-blue-light bg-white px-8 py-4 shadow-sm"
      data-testid="app-header"
    >
      <nav className="flex flex-row items-center">
        <div className="flex max-w-screen-xl flex-wrap items-center justify-between">
          <Link to="/">
            <span
              className="self-center whitespace-nowrap text-lg font-semibold text-blue-main sm:text-xl"
              data-testid="app-title"
            >
              Podcaster
            </span>
          </Link>
        </div>
      </nav>
    </header>
  )
}
