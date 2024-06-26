import { EpisodeDetail } from '@/pages/episode-detail/episode-detail.component'
import { Home } from '@/pages/home/home.component'
import { NotFound } from '@/pages/not-found/not-found.component'
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
      path: '/podcast/:podcastId/episode/:episodeId',
      element: <EpisodeDetail />,
    },
    {
      path: '/*',
      element: <NotFound />,
    },
  ])

  return <RouterProvider router={router} />
}
