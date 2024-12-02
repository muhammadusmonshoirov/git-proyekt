import React from 'react'
import { CiSearch } from "react-icons/ci";//import icons
import { IoLeafOutline } from "react-icons/io5";//import icons
import { LuLeafyGreen } from "react-icons/lu";//import icons
import { GiTomato } from "react-icons/gi"; //import icons
import { GiStrawberry } from "react-icons/gi";//import icons
import { GiTrenchSpade } from "react-icons/gi";//import icons
import { LuFlower2 } from "react-icons/lu";//import icons
import img3 from '../assets/image 1.png'//import img
import { CiHeart } from "react-icons/ci";//import icons
import { FaStar } from "react-icons/fa";//import icons
import { FaStarHalfAlt } from "react-icons/fa";//import icons
import { LuShoppingCart } from "react-icons/lu";//import icons
import img4 from '../assets/image 1 copy.png'//import img
import img5 from '../assets/image 1 copy 2.png'//import img
import { RiFireFill } from "react-icons/ri"; //import icons
import { FaCheckSquare } from "react-icons/fa";//import icons
import { MdOutlineClear } from "react-icons/md";//import icons
import img6 from '../assets/image 1 copy 3.png'//import img
import { FaMinus } from "react-icons/fa";//import icons
import { FaPlus } from "react-icons/fa";//import icons

// Blog

const Blog = () => {
  return (
    <div className='container mx-auto w-[87vw]'>
        <div >
       <CiSearch className='text-2xl absolute ml-5 mt-4 text-gray-600'/>
       <div className='flex mt-10'>
       <input type="text" placeholder='Search' className='border py-4 px-16 w-[825px] rounded-full'/>
       <h1 className='border w-[258px] rounded-full pl-5 ml-5'><h1 className='text-gray-600'>Sort by</h1> Most expensive</h1>
       </div>
       </div>
       <div className='flex gap-16'>
         <div className='w-[110px] h-[72px] border rounded-md flex justify-center items-center mt-10'>
        <h1 className='flex text-xl'>< IoLeafOutline className='text-2xl text-green-600'/> ALL</h1>
      </div>
      <div className='w-[144px] h-[72px] border rounded-md flex justify-center items-center mt-10'>
        <h1 className='flex text-xl'> BUNDLES</h1>
      </div>
      <div className='w-[128px] h-[72px] border rounded-md flex justify-center items-center mt-10'>
        <h1 className='flex text-xl'>< LuLeafyGreen className='text-2xl text-green-600'/>HERBS</h1>
      </div>
      <div className='w-[187px] h-[72px] border rounded-md flex justify-center items-center mt-10'>
        <h1 className='flex text-xl'>< GiTomato className='text-2xl text-green-600'/>VEGETABLES</h1>
      </div>
      <div className='w-[148px] h-[72px] border rounded-md flex justify-center items-center mt-10'>
        <h1 className='flex text-xl'>< GiStrawberry className='text-2xl text-green-600'/>Fruit</h1>
      </div>
      <div className='w-[157px] h-[72px] border rounded-md flex justify-center items-center mt-10'>
        <h1 className='flex text-xl'>< GiTrenchSpade className='text-2xl text-green-600'/>SUPPLIES</h1>
      </div>
      <div className='w-[163px] h-[72px] border rounded-md flex justify-center items-center mt-10'>
        <h1 className='flex text-xl'>< LuFlower2 className='text-2xl text-green-600'/>FLOWERS</h1>
      </div>
         </div>
         <div className='grid grid-cols-3'>
        <div className='w-[350px] h-[512px] border rounded-md mt-10'>
          <img className='ml-8 absolute mt-6' src={img3} alt="" />
          < CiHeart className='text-2xl text-orange-600 absolute mt-4 ml-[19.5rem]'/>
          <div className='flex gap-1 absolute mt-[21rem] ml-8 text-yellow-400 items-center'>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          < FaStarHalfAlt/>
          <h1 className='text-gray-600'>(123)</h1>
          </div>
          <p className='absolute ml-8 mt-[23rem]'>Seedra Cilantro Seeds for Planting <br /> Indoor and Outdoor</p>
          <h1 className='absolute ml-8 mt-[27rem] text-3xl font-bold'>$12.56</h1>
          < LuShoppingCart className='text-2xl text-green-600 absolute mt-[27rem] ml-[19rem]'/>
        </div>
        <div className='w-[350px] h-[512px] border rounded-md mt-10'>
          <img className='ml-8 absolute mt-6' src={img4} alt="" />
          < CiHeart className='text-2xl text-orange-600 absolute mt-4 ml-[19.5rem]'/>
          <div className='flex gap-1 absolute mt-[21rem] ml-8 text-yellow-400 items-center'>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          < FaStarHalfAlt/>
          <h1 className='text-gray-600'>(123)</h1>
          </div>
          <p className='absolute ml-8 mt-[23rem]'>SEEDRA Corn - Bodacious Hybrid <br /> Seeds for Indoor and Outdoor Planting</p>
          <h1 className='absolute ml-8 mt-[27rem] text-3xl font-bold'>$12.56</h1>
          < LuShoppingCart className='text-2xl text-green-600 absolute mt-[27rem] ml-[19rem]'/>
        </div>
        <div className='w-[350px] h-[512px] border rounded-md mt-10'>
          <img className='ml-8 absolute mt-6' src={img5} alt="" />
          < CiHeart className='text-2xl text-orange-600 absolute mt-4 ml-[19.5rem]'/>
          <div className='flex gap-1 absolute mt-[21rem] ml-8 text-yellow-400 items-center'>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          < FaStarHalfAlt/>
          <h1 className='text-gray-600'>(123)</h1>
          </div>
          <p className='absolute ml-8 mt-[23rem]'>SEEDRA Spinach Seeds for Indoor <br /> and Outdoor Planting</p>
          <h1 className='absolute ml-8 mt-[27rem] text-3xl font-bold'>$12.56</h1>
          < FaCheckSquare className='text-2xl text-green-600 absolute mt-[27rem] ml-[19rem]'/>
        </div>
        <div className='w-[350px] h-[512px] border rounded-md mt-10'>
          <img className='ml-8 absolute mt-6' src={img3} alt="" />
          < CiHeart className='text-2xl text-orange-600 absolute mt-4 ml-[19.5rem]'/>
          <div className='flex gap-1 absolute mt-[21rem] ml-8 text-yellow-400 items-center'>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          < FaStarHalfAlt/>
          <h1 className='text-gray-600'>(123)</h1>
          </div>
          <p className='absolute ml-8 mt-[23rem]'>Seedra Cilantro Seeds for Planting <br /> Indoor and Outdoor</p>
          <h1 className='absolute ml-8 mt-[27rem] text-3xl font-bold'>$12.56</h1>
          < LuShoppingCart className='text-2xl text-green-600 absolute mt-[27rem] ml-[19rem]'/>
        </div>
        <div className='w-[350px] h-[512px] border rounded-md mt-10'>
          <img className='ml-8 absolute mt-6' src={img4} alt="" />
          < CiHeart className='text-2xl text-orange-600 absolute mt-4 ml-[19.5rem]'/>
          <div className='flex gap-1 absolute mt-[21rem] ml-8 text-yellow-400 items-center'>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          < FaStarHalfAlt/>
          <h1 className='text-gray-600'>(123)</h1>
          </div>
          <p className='absolute ml-8 mt-[23rem]'>SEEDRA Corn - Bodacious Hybrid <br /> Seeds for Indoor and Outdoor Planting</p>
          <h1 className='absolute ml-8 mt-[27rem] text-3xl font-bold flex items-center'><RiFireFill className='text-orange-600'/> $12.56</h1>
          < LuShoppingCart className='text-2xl text-green-600 absolute mt-[27rem] ml-[19rem]'/>
        </div>
        <div className='w-[350px] h-[512px] border rounded-md mt-10'>
          <img className='ml-8 absolute mt-6' src={img5} alt="" />
          < CiHeart className='text-2xl text-orange-600 absolute mt-4 ml-[19.5rem]'/>
          <div className='flex gap-1 absolute mt-[21rem] ml-8 text-yellow-400 items-center'>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          < FaStarHalfAlt/>
          <h1 className='text-gray-600'>(123)</h1>
          </div>
          <p className='absolute ml-8 mt-[23rem]'>SEEDRA Spinach Seeds for Indoor <br /> and Outdoor Planting</p>
          <h1 className='absolute ml-8 mt-[27rem] text-3xl font-bold'>$12.56</h1>
          < LuShoppingCart className='text-2xl text-green-600 absolute mt-[27rem] ml-[19rem]'/>
        </div>
        <div className='w-[350px] h-[512px] border rounded-md mt-10'>
          <img className='ml-8 absolute mt-6' src={img3} alt="" />
          < CiHeart className='text-2xl text-orange-600 absolute mt-4 ml-[19.5rem]'/>
          <div className='flex gap-1 absolute mt-[21rem] ml-8 text-yellow-400 items-center'>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          < FaStarHalfAlt/>
          <h1 className='text-gray-600'>(123)</h1>
          </div>
          <p className='absolute ml-8 mt-[23rem]'>Seedra Cilantro Seeds for Planting <br /> Indoor and Outdoor</p>
          <h1 className='absolute ml-8 mt-[27rem] text-3xl font-bold'>$12.56</h1>
          < LuShoppingCart className='text-2xl text-green-600 absolute mt-[27rem] ml-[19rem]'/>
        </div>
        <div className='w-[350px] h-[512px] border rounded-md mt-10'>
          <img className='ml-8 absolute mt-6' src={img4} alt="" />
          < CiHeart className='text-2xl text-orange-600 absolute mt-4 ml-[19.5rem]'/>
          <div className='flex gap-1 absolute mt-[21rem] ml-8 text-yellow-400 items-center'>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          < FaStarHalfAlt/>
          <h1 className='text-gray-600'>(123)</h1>
          </div>
          <p className='absolute ml-8 mt-[23rem]'>SEEDRA Corn - Bodacious Hybrid <br /> Seeds for Indoor and Outdoor Planting</p>
          <h1 className='absolute ml-8 mt-[27rem] text-3xl font-bold flex items-center'><RiFireFill className='text-orange-600'/> $12.56</h1>
          < LuShoppingCart className='text-2xl text-green-600 absolute mt-[27rem] ml-[19rem]'/>
        </div>
        <div className='w-[350px] h-[512px] border rounded-md mt-10'>
          <img className='ml-8 absolute mt-6' src={img5} alt="" />
          < CiHeart className='text-2xl text-orange-600 absolute mt-4 ml-[19.5rem]'/>
          <div className='flex gap-1 absolute mt-[21rem] ml-8 text-yellow-400 items-center'>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          < FaStarHalfAlt/>
          <h1 className='text-gray-600'>(123)</h1>
          </div>
          <p className='absolute ml-8 mt-[23rem]'>SEEDRA Spinach Seeds for Indoor <br /> and Outdoor Planting</p>
          <h1 className='absolute ml-8 mt-[27rem] text-3xl font-bold'>$12.56</h1>
          < LuShoppingCart className='text-2xl text-green-600 absolute mt-[27rem] ml-[19rem]'/>
        </div>
      </div>
      <div className='w-[570px] h-[420px] -mt-[116rem] ml-[48rem] absolute bg-white shadow-lg border rounded-xl border-2'>
          <h1 className='absolute ml-[32rem] mt-3.5 text-gray-600 text-3xl'><MdOutlineClear/></h1>
          <img className='ml-5 mt-14' src={img6} alt="" />
          <h1 className='absolute ml-[6rem] -mt-14 text-md font-semibold'>SEEDRA Corn - Bodacious Hybrid <br /> Seeds for Indoor and Outdoor Planting</h1>
          <hr className='mt-12 absolute w-[518px] ml-5'/>
          <h1 className='border text-green-600 px-3 py-2 rounded-xl font-bold absolute ml-[26.5rem] -mt-14 text-md flex gap-3 items-center'>
            <FaMinus/>
            <h1 className='bg-gray-200 text-green-600 py-1 rounded-md px-3'>2</h1>
            <h1><FaPlus/></h1>
          </h1>
          <div className='flex ml-[6rem] gap-[12rem]'>
            <h1 className='text-gray-600 font-semibold'>1 pack</h1>
            <h1 className='text-xl font-semibold'>$24.56</h1>
          </div>
          <img className='ml-5 mt-14' src={img6} alt="" />
          <h1 className='absolute ml-[6rem] -mt-14 text-md font-semibold'>SEEDRA Corn - Bodacious Hybrid <br /> Seeds for Indoor and Outdoor Planting</h1>
          <h1 className='border text-green-600 px-3 py-2 rounded-xl font-bold absolute ml-[26.5rem] -mt-14 text-md flex gap-3 items-center'>
            <FaMinus/>
            <h1 className='bg-gray-200 text-green-600 py-1 rounded-md px-3'>2</h1>
            <h1><FaPlus/></h1>
          </h1>
          <div className='flex ml-[6rem] gap-[12rem]'>
            <h1 className='text-gray-600 font-semibold'>1 pack</h1>
            <h1 className='text-xl font-semibold'>$24.56</h1>
          </div>
          <hr className='mt-5 absolute w-[518px] ml-5'/>
          <div className='gap-8 flex justify-end mr-7 mt-10'>
            <button className='text-green-600 rounded-xl font-bold text-md'>Clear</button>
            <button className='bg-green-600 rounded-lg font-semibold text-md text-white ml-5 py-3 px-8'>Proceed to payment</button>
          </div>
         </div>
    </div>
  )
}

export default Blog