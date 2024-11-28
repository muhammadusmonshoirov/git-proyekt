import React from 'react'
import img from "../assets/lOGO.png"

const Navbar = () => {
  return (
    <div className='container mx-auto w-[80vw]'>
        <nav className='flex justify-between items-center'>
            <img src={img} alt="" />
            <ul className='flex gap-10'>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Reviews</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar