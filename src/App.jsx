import React from 'react'
import { createBrowserRouter } from 'react-router'
import RootLayOut from './components/RootLayOut'
import { RouterProvider } from 'react-router-dom'
import Home from './features/home/Home'
import MovieSearch from './features/movie/MovieSearch'
import PopularMovie from './features/movie/PopularMovie'
import TopRatedMovie from './features/movie/TopRatedMovie'
import UpcomingMovie from './features/movie/UpcomingMovie'

export default function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <RootLayOut/>,
      children:[
        {
          index: true,
          element: <Home/>
        },

        {
          path:'search-movie',
          element: <MovieSearch/>
        },

         {
          path:'popular-movie',
          element: <PopularMovie/>
        },

         {
          path:'top-movie',
          element: <TopRatedMovie/>
        },

         {
          path:'upcoming-movie',
          element: <UpcomingMovie/>
        },
      ]
    }
  ])


  return <RouterProvider router={router} />
}
