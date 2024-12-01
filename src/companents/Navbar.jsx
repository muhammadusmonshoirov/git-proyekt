import React from 'react'
import { NavLink } from 'react-router-dom'
import img from '../assets/Frame.png'
import { RiInstagramFill } from "react-icons/ri";//import icons
import { RiFacebookFill } from "react-icons/ri";//import icons
import { CiHeart } from "react-icons/ci";//import icons
import { MdOutlineShoppingCart } from "react-icons/md"; //import icons



//Navbar

const Navbar = () => {
  return (
    <div className='container mx-auto w-[87vw]'>
          <nav className='flex justify-between items-center py-4'>
            <img src={img} alt="" />
              <ul className='flex gap-8 text-gray-600'>
                  <NavLink to={'/'}>ALL PRODUCTS</NavLink>
                  <NavLink to={'/About'}>ABOUT SEEDRA</NavLink>
                  <NavLink to={''}>OUR BLOG</NavLink>
                  <NavLink to={''}>CONTACTS</NavLink>
              </ul>
              <div className='flex gap-3 text-gray-600'>
              < RiInstagramFill />
              < RiFacebookFill />
              </div>
              <input type="text" placeholder='Search' className='border py-2 px-10 rounded-full' />
              <CiHeart className='text-2xl text-green-600' />
              <MdOutlineShoppingCart className='text-2xl text-green-600 -ml-[3rem]' />
          </nav>
    </div>
  )
}

export default Navbar