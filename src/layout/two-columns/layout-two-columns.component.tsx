import { Layout } from '../base/layout.component'
import { MainColumn } from './main/main-column.component'
import { LeftSideColumn } from './side/side-column.component'

interface LayoutTwoColumnsProps {
  children: JSX.Element[]
}

export const LayoutTwoColumns = ({ children }: LayoutTwoColumnsProps) => {
  return (
    <Layout>
      <LeftSideColumn>{children[0]}</LeftSideColumn>
      <MainColumn>{children[1]}</MainColumn>
    </Layout>
  )
}
