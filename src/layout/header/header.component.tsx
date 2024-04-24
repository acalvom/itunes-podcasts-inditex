import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header
      className="px-8 py-4 fixed top-0 w-full shadow-sm border-b border-blue-light"
      data-testid="app-header"
    >
      <nav className="flex flex-row items-center">
        <div className="flex flex-wrap justify-between items-center max-w-screen-xl">
          <Link to="/">
            <span
              className="self-center text-lg text-blue-main sm:text-xl font-semibold whitespace-nowrap"
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
