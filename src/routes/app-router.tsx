import { Home } from '@/pages/home/home.component'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export function AppRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
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
