import { Footer } from './footer/footer.component'
import { Header } from './header/header.component'
import { Main } from './main/main.component'

type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen my-auto">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}
