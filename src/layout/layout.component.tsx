import { Footer } from './footer/footer.component'
import { Header } from './header/header.component'
import { Main } from './main/main.component'

type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="my-auto flex min-h-screen flex-col">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}
