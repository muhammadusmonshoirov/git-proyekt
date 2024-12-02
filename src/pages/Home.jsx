import React from 'react'
import { RiFireFill } from "react-icons/ri"; //import icons
import img from '../assets/close-up-fresh-green-basil-herb-leaves-isolated-white-background 1.png'//import img
import img2 from '../assets/image 2.png'//import img
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
import { IoTimeSharp } from "react-icons/io5";//import icons
import img6 from '../assets/image 2 copy.png'//import img
import img7 from '../assets/Ellipse 1.png'//import img
import img8 from '../assets/female-gardener-holding-wicker-basket-with-strawberries 1.png'//import img
import img9 from '../assets/Ellipse 5.png'//import img
import img10 from '../assets/Ellipse 2.png'//import img
import img11 from '../assets/Ellipse 3.png'//import img

// Home

const Home = () => {
  return (
    // container home page ni orab turuvchi div
    <div className='container mx-auto w-[80vw]'> 
      <div className='w-[1110px] h-[455px] bg-gray-100 rounded-3xl mt-5'>
        <h1 className='text-5xl font-bold ml-20 mt-10 absolute'>SEEDRA Basil Seeds for <br /> Indoor and Outdoor Planting</h1>
        <p className='text-xl ml-20 mt-40 absolute'>Be sure of our quality - the freshest batches of this season. Non-GMO, <br /> Heirloom - our seeds were tested and have the best germination ratings. <br /> Your easy growing experience is our guarantee</p>
        <h1 className='text-5xl ml-20 mt-[17rem] absolute font-bold flex gap-4 items-center'><RiFireFill className='text-5xl text-orange-600 '/>$12.56<del className='text-gray-600 text-2xl ml-60 mt-1 absolute'>$15.56</del></h1>
        <button className='ml-20 mt-[22rem] absolute bg-green-600 text-white py-3 px-6 rounded-lg'>Add to card</button>
        <button className='ml-[14rem] mt-[22rem] absolute bg-white text-green-600 py-3 px-6 rounded-lg'>Discover</button>
        <img className='ml-[49.5rem] mt-[12.2rem] absolute' src={img} alt="" />
        <img className='ml-[48rem] mt-[2rem] absolute' src={img2} alt="" />
      </div>
      <div className='w-[1110px] h-[104px] bg-[#FFE62E17] mt-10 rounded-xl'>
        <div className='absolute mt-5 ml-80'>
        <h1 className='text-2xl font-bold text-center'>We sell seeds </h1>
        <p className='text-lg text-center'>that always sprout and gardening supplies which never break</p>
        </div>
      </div>
      <h1 className='text-5xl font-bold mt-10'>Our products.</h1>
      <div className='flex gap-6'>
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
      <div className='flex justify-between mt-10'>
      <h1 className='text-3xl font-bold'>Our blog.</h1>
      <button className='border py-2 px-5 rounded-lg text-green-600'>Go to our blog</button>
      </div>
      <div className='w-[730px] h-[300px] bg-gray-200 mt-10 rounded-xl'>
          <IoTimeSharp className='text-2xl text-gray-600 absolute mt-6 ml-6'/>
          <h1 className='absolute ml-14 mt-6 text-gray-600'>12.09.2021</h1>
          <h1 className='absolute ml-6 mt-14 text-3xl font-bold'>How to plant spinach correctly <br /> in winter</h1>
          <p className='absolute ml-6 mt-[8rem] text-gray-600'>In most areas, successive sowing can be done from early <br /> spring until early winter, but more often during hotter <br /> months...</p>
          <button className='bg-white py-3 px-7 rounded-lg text-green-600 absolute mt-[14rem] ml-6'>Read</button>
          <img className='absolute ml-[27.2rem]' src={img6} alt="" />
        </div>
        <div className='flex gap-8'>
        <div className='w-[350px] h-[300px] bg-gray-200 mt-10 rounded-xl'>
          <IoTimeSharp className='text-2xl text-gray-600 absolute mt-6 ml-6'/>
          <h1 className='absolute ml-14 mt-6 text-gray-600'>12.09.2021</h1>
          <h1 className='absolute ml-6 mt-14 text-3xl font-bold'>How to plant spinach <br /> correctly in winter</h1>
          <button className='bg-white py-3 px-7 rounded-lg text-green-600 absolute mt-[9rem] ml-6'>Read</button>
          <img className='absolute ml-[9.6rem] mt-[10.5em]' src={img7} alt="" />
        </div>
        <div className='w-[350px] h-[300px] bg-gray-200 mt-10 rounded-xl'>
          <IoTimeSharp className='text-2xl text-gray-600 absolute mt-6 ml-6'/>
          <h1 className='absolute ml-14 mt-6 text-gray-600'>12.09.2021</h1>
          <h1 className='absolute ml-6 mt-14 text-3xl font-bold'>How to plant spinach <br /> correctly in winter</h1>
          <button className='bg-white py-3 px-7 rounded-lg text-green-600 absolute mt-[9rem] ml-6'>Read</button>
          <img className='absolute ml-[9.6rem] mt-[10.5em]' src={img7} alt="" />
        </div>
        </div>
        <div className='w-[350px] h-[638px] bg-gray-200 rounded-xl ml-[48rem] -mt-[40rem]'>
          <IoTimeSharp className='text-2xl text-gray-600 absolute mt-6 ml-6'/>
          <h1 className='absolute ml-14 mt-6 text-gray-600'>12.09.2021</h1>
          <h1 className='absolute ml-6 mt-14 text-3xl font-bold'>How to plant spinach <br /> correctly in winter</h1>
          <p className='absolute ml-6 mt-[8rem] text-gray-600'>In most areas, successive sowing can be <br /> done from early spring until early winter, but <br /> more often during hotter months...</p>
          <button className='bg-white py-3 px-7 rounded-lg text-green-600 absolute mt-[14rem] ml-6'>Read</button>
          <img className='absolute ml-[4rem] mt-[15.4rem]' src={img8} alt="" />
        </div>
        <h1 className='text-3xl font-bold text-center mt-10'>What out clients say</h1>
        <div className='flex gap-6'>
          <div className=' w-[540px] h-[347px] border shadow-xl mt-10 rounded-xl -ml-[15rem] mt-20'>
            <img className='absolute ml-10 mt-10' src={img9} alt="" />
            <h1 className='absolute ml-32 mt-10 text-2xl font-bold'>Carla Samantoes-Diego</h1>
            <p className='absolute ml-32 mt-20 text-gray-600 font-semibold'>12.09.2021</p>
            <div className='flex gap-1 absolute mt-[8rem] text-xl ml-10 text-yellow-400 items-center'>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          < FaStarHalfAlt/>
          </div>
          <p className='absolute ml-10 mt-[11rem] text-lg'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and <br /> professional instructions created by PhD Helga George <br /> Be sure of our quality - the freshest batches of this season. <br /> Non-GMO, Heirloom - our seeds were tested and have the <br /> best germination ratings. </p>
          </div>
          <div className='w-[540px] h-[347px] border shadow-xl mt-10 rounded-xl ml-[2rem]'>
            <img className='absolute ml-10 mt-10' src={img9} alt="" />
            <h1 className='absolute ml-32 mt-10 text-2xl font-bold'>Carla Samantoes-Diego</h1>
            <p className='absolute ml-32 mt-20 text-gray-600 font-semibold'>12.09.2021</p>
            <div className='flex gap-1 absolute mt-[8rem] text-xl ml-10 text-yellow-400 items-center'>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          < FaStarHalfAlt/>
          </div>
          <p className='absolute ml-10 mt-[11rem] text-lg'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and <br /> professional instructions created by PhD Helga George <br /> Be sure of our quality - the freshest batches of this season. <br /> Non-GMO, Heirloom - our seeds were tested and have the <br /> best germination ratings. </p>
          </div>
          <div className='w-[540px] h-[347px] border shadow-xl mt-10 rounded-xl ml-[60rem] absolute mt-20'>
            <img className='absolute ml-10 mt-10' src={img9} alt="" />
            <h1 className='absolute ml-32 mt-10 text-2xl font-bold'>Carla Samantoes-Diego</h1>
            <p className='absolute ml-32 mt-20 text-gray-600 font-semibold'>12.09.2021</p>
            <div className='flex gap-1 absolute mt-[8rem] text-xl ml-10 text-yellow-400 items-center'>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          < FaStarHalfAlt/>
          </div>
          <p className='absolute ml-10 mt-[11rem] text-lg'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and <br /> professional instructions created by PhD Helga George <br /> Be sure of our quality - the freshest batches of this season. <br /> Non-GMO, Heirloom - our seeds were tested and have the <br /> best germination ratings. </p>
          </div>
        </div>
        <h1 className='text-4xl font-bold mt-10'>Seedra helps to grow fast and <br /> efficiant</h1>
        <p className='mt-10'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and <br /> professional instructions created by PhD Helga George</p>
        <p className='mt-10'>Be sure of our quality - the freshest batches of this season. Non- <br /> GMO, Heirloom - our seeds were tested and have the best germination ratings. </p>
        <p>Your easy growing experience is our guarantee</p>
        <p>Spinach commom culinary uses: salads, soups, smoothies, lasagne, <br /> pizza, pies, risotto, and more</p>
        <p className='mt-10'>Proudly sourced in the USA - our garden seeds are grown, <br /> harvested, and packaged in the USA. We support local farmers and <br /> are happy to produce this American-made product</p>
        <img className='ml-[45rem] -mt-[23rem]' src={img10} alt="" />
        <img className='ml-[42rem] -mt-[31rem]' src={img11} alt="" />
    </div>
  )
}

export default Home