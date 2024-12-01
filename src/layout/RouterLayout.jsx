import React from 'react'
import Navbar from '../companents/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../companents/Footer'

const RouterLayout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default RouterLayout