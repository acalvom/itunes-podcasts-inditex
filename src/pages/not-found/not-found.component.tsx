import { Layout } from '@/layout/base/layout.component'

export const NotFound = () => {
  return (
    <Layout>
      <p className="m-auto text-4xl font-semibold text-blue-main" data-testid="page-not-found">
        This page does not exist
      </p>
    </Layout>
  )
}
