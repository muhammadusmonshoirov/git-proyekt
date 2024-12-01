import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import RouterLayout from './layout/RouterLayout'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/about",
          element: <About/>
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App