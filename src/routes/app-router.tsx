import { Layout } from '@/layout/layout.component'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export function AppRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout>
          <div>Home</div>
        </Layout>
      ),
    },
    {
      path: '/detail',
      element: <div>Podcast detail</div>,
    },
    {
      path: '/*',
      element: <div>Not found</div>,
    },
  ])

  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
}
