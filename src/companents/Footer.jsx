import React from 'react'
import img from '../assets/Frame.png' //import img
import { RiInstagramFill } from "react-icons/ri";//import icons
import { RiFacebookFill } from "react-icons/ri";//import icons

//Footer

const Footer = () => {
  return (
    <div className='container mx-auto w-[87vw]'>
        <div className='flex gap-20'>
        <a className='text-green-600' href="">ALL PRODUCTS</a>
        <a href="">ABOUT SEEDRA</a>
        <a href="">OUR BLOG</a>
        <img src={img} alt="" />
        <a href="">Terms&Conditions</a>
        <a href="">Privacy Policy</a>
        </div>
        <hr className='mt-10'/>
        <div className='flex gap-5 text-green-600 text-2xl mt-5'>
        <RiInstagramFill/>
        <RiFacebookFill/>
        </div>
        <h1 className='text-gray-600 ml-[69rem] absolute -mt-5'>All rights reserved</h1>
    </div>
  )
}

export default Footer