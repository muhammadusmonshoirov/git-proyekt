import React from 'react'
import { IoLeafOutline } from "react-icons/io5";//import icons
import { LuLeafyGreen } from "react-icons/lu";//import icons
import { GiTomato } from "react-icons/gi";//import icons
import { GiStrawberry } from "react-icons/gi";//import icons
import { GiTrenchSpade } from "react-icons/gi";//import icons
import { LuFlower2 } from "react-icons/lu";//import icons
import { CiSearch } from "react-icons/ci";//import icons
import img4 from '../assets/image 1 copy.png'//import img
import { CiHeart } from "react-icons/ci";//import icons
import { FaStar } from "react-icons/fa";//import icons
import { FaStarHalfAlt } from "react-icons/fa";//import icons
import { LuShoppingCart } from "react-icons/lu";//import icons
import { FaCheckSquare } from "react-icons/fa";//import icons
import { RiFireFill } from "react-icons/ri"; //import icons



// About

const About = () => {
  return (
    <div className='container mx-auto w-[87vw]'>
       <div>
       <CiSearch className='text-2xl absolute ml-5 mt-4 text-gray-600'/>
       <div className='flex'>
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
         <div className='leading-10 text-lg mt-10 absolute'>
         <h1>FILTERS</h1>
         <hr className='w-[200px]'/>
         <h1>Seed type </h1>
         <hr className='w-[200px]'/>
         <div>
         </div>
         <div className='flex items-center'>
         <input type="checkbox" h1 className='text-green-600 text-xl w-[20px] h-[20px]'/><h1>Hybrid</h1>
         </div>
         <div className='flex items-center'>
         <input type="checkbox" h1 className='text-green-600 text-xl w-[20px] h-[20px]'/><h1>Open Pollinated</h1>
         </div>
         <div className='flex items-center'>
         <input type="checkbox" h1 className='text-green-600 text-xl w-[20px] h-[20px]'/><h1>Organic Seeds, Plants, <br /> and Supplies</h1>
         </div>
         <div className='flex items-center'>
         <input type="checkbox" h1 className='text-green-600 text-xl w-[20px] h-[20px]'/><h1>Pelleted See</h1>
         </div>
         <hr />
         </div>
         <div className='leading-10 text-lg mt-[20rem] absolute'>
         <h1>Featured</h1>
         <hr className='w-[200px]'/>
         <h1>Growing Conditions</h1>
         <hr className='w-[200px]'/>
         <h1>Price</h1>
         </div>
         <div className='flex items-center mt-[28rem] absolute'>
            <div>
            <h1 className='text-gray-600'>From</h1>
             <button className='border rounded-md w-[100px] h-[40px]'>$1232</button>
            </div>
            <h1 className='text-5xl mt-3 text-gray-600'>-</h1>
            <div>
            <h1 className='text-gray-600'>To</h1>
            <button className='text-white border rounded-md w-[100px] h-[40px]'>$1232</button>
            </div>
         </div>
         <input type="range"  className='absolute mt-[33rem] w-[228px]'/>
         <hr className='w-[200px] mt-[35rem] absolute'/>
         <h1 className='mt-[36rem] absolute'>Use</h1>
         <hr  className='w-[200px] mt-[38rem] absolute'/>
         <h1 className='mt-[39rem] absolute'>Additional Characteristic</h1>
        {/* cards */}
         <div className='flex flex-wrap gap-5 ml-[15.3rem]'>
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
          <img className='ml-8 absolute mt-6 ' src={img4} alt="" />
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
          <h1 className='absolute ml-8 mt-[27rem] text-3xl font-bold flex items-center'><RiFireFill className='text-red-600'/>$12.56</h1>
          < FaCheckSquare className='text-2xl text-green-600 absolute mt-[27rem] ml-[19rem]'/>
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
          <h1 className='absolute ml-8 mt-[27rem] text-3xl font-bold flex items-center'><RiFireFill className='text-red-600'/>$12.56</h1>
          < FaCheckSquare className='text-2xl text-green-600 absolute mt-[27rem] ml-[19rem]'/>
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
          <h1 className='absolute ml-8 mt-[27rem]  text-3xl font-bold flex items-center'> <RiFireFill className='text-red-600'/>$12.56</h1>
          < FaCheckSquare className='text-2xl text-green-600 absolute mt-[27rem] ml-[19rem]'/>
        </div>
         </div>
         <div className='w-[525px] h-[504px] shadow-lg border rounded-md absolute bg-white ml-[15rem] mt-[-105rem]'>
            <h1 className='ml-5 mt-5 absolute font-bold text-2xl'>Herbs</h1>
            <div className='leading-10 absolute ml-5 mt-20'>
                <h1>Angelica</h1>
                <h1>Anise</h1>
                <h1>Anise Hyssop</h1>
                <h1>Asclepias</h1>
                <h1>(Butterfly Weed)</h1>
                <h1>Basil</h1>
                <h1>Bee Balm</h1>
                <h1>Borage</h1>
            </div>
            <dir className='leading-10 absolute ml-40 mt-20'>
                <h1>Calendula</h1>
                <h1>Caraway</h1>
                <h1>Catmint</h1>
                <h1>Catnip</h1>
                <h1>Chamomile</h1>
                <h1>Chervil</h1>
            </dir>
            <dir className='leading-10 absolute ml-80 mt-20'>
                <h1>Calendula</h1>
                <h1>Caraway</h1>
                <h1>Catmint</h1>
                <h1>Catnip</h1>
                <h1>Chamomile</h1>
                <h1>Chervil</h1>
            </dir>
            <hr className='mt-[27rem]'/>
            <h1 className='ml-5 mt-5 absolute font-bold text-xl text-gray-600'>View all Herbs</h1>
</div>
    </div>
  )
}

export default About