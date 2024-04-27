import { Home } from '@/pages/home/home.component'
import { PodcastDetail } from '@/pages/podcast-detail/podcast.detail.component'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export function AppRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/podcast/:podcastId',
      element: <PodcastDetail />,
    },
    {
      path: '/*',
      element: <div>Not found</div>,
    },
  ])

  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
}
