import React from 'react'
import img from '../assets/image 1 copy 4.png'//import img
import img2 from '../assets/image 2 copy 2.png'//import img
import img3 from '../assets/image 3.png'//import img
import img4 from '../assets/image 4.png'//import img
import img5 from '../assets/image 5.png'//import img
import img6 from '../assets/image 6.png'//import img
import img7 from '../assets/image 7.png'//import img
import { FaCheck } from "react-icons/fa6";//import icons
import { GiTomato } from "react-icons/gi"; //import icons
import { FaMinus } from "react-icons/fa";//import icons
import { FaPlus } from "react-icons/fa";//import icons
import {CiHeart} from "react-icons/ci"
import { GoDotFill } from "react-icons/go";//import icons
import img8 from '../assets/fresh-sweet-basil-leaves-isolated-white-background 2.png'//import img 
import img9 from '../assets/fresh-sweet-basil-leaves-isolated-white-background 1.png'//import img
import img10 from '../assets/fresh-sweet-basil-leaves-isolated-white-background 4.png'//import img
import { FaStar } from "react-icons/fa";//import icons
import { FaStarHalfAlt } from "react-icons/fa";//import icons
import img11 from "../assets/Frame 79.png"//import img
import img12 from "../assets/Frame 80.png"//import img
import img13 from "../assets/Frame 81.png"//import img
import img14 from "../assets/Frame 82.png"//import img
import img15 from "../assets/Frame 83.png"//import img
import img16 from "../assets/Ellipse 5.png"//import img
import img17 from "../assets/Rectangle 1.png"//import img
import img18 from '../assets/image 1.png'//import img
import { LuShoppingCart } from "react-icons/lu";//import icons
import img19 from '../assets/image 1 copy.png'//import img
import img20 from '../assets/image 1 copy 2.png'//import img
import { FaCheckSquare } from "react-icons/fa";//import icons

// Contacts

const Contacts = () => {
  return (
    <div className='container mx-auto w-[87vw]'>
        <ul className='flex gap-2 text-gray-600 mt-5'>
            <li><a href="">Main</a></li>
            <li><a href="">/ Cataloug</a></li>
            <li><a href="">/ Vegetables</a></li>
            <li><a href="">/ Cucumber /</a></li>
            <li><a className='text-black font-semibold' href="">SEEDRA cucumber</a></li>
        </ul>
        <div className='flex '>
        <img className='mt-5' src={img} alt="" />
        <h1 className='text-2xl font-bold mt-5 ml-10'>SEEDRA Corn - Bodacious Hybrid Seeds for <br /> Indoor and Outdoor Planting</h1>
        </div>
        <div className='flex gap-2 ml-[30.5rem] mt-[-24rem] absolute'>
        <button className='flex items-center gap-2 mt-5 text-green-600 bg-gray-100 py-2 px-6 rounded-full text-sm'><FaCheck className='text-green-600'/>AVAILABLE</button>
        <button className='flex items-center gap-2 mt-5 text-green-600 border py-2 px-6 rounded-full text-sm'><GiTomato className='text-green-600'/>VEGETABLES</button>
        </div>
            <h1 className='text-gray-600 font-semibold mt-[-19rem] absolute ml-[30.5rem]'>Size</h1>
       <div className='flex ml-[33rem] mt-[-19.2rem] absolute items-center'>
        <h1 className='text-xl font-semibold'>2 PACK</h1>
       <h1 className='border text-green-600 px-3 py-2 rounded-xl font-bold absolute text-md flex gap-3 items-center ml-[22rem]'>
            <FaMinus/>
            <h1 className='bg-gray-200 text-green-600 py-1 rounded-md px-3'>2</h1>
            <h1><FaPlus/></h1>
          </h1>
       </div>
       <div className='ml-[30.5rem] mt-[-16rem] absolute'>
       <div className='w-[510px] h-[44px] border  rounded-lg mt-[0.5rem] focus-within:border-green-600'>
        <div className='flex'>
           <input type="radio" className='ml-4 w-5 h-5 mt-2.5'/> 
           <h1 className='mt-2 ml-4 font-semibold'>1 pack</h1>
        </div>
        <div className='flex mt-[-2rem] justify-end mr-4'>
            <h1 className='mt-2 ml-4 font-semibold text-gray-600'>start from</h1>
            <h1 className='mt-2 ml-4 font-semibold text-lg'>$1,56</h1>
        </div>
       </div>
       <div className='w-[510px] h-[44px] border focus-within:border-green-600 rounded-lg mt-[0.5rem]'>
        <div className='flex'>
           <input type="radio" className='ml-4 w-5 h-5 mt-2.5'/> 
           <h1 className='mt-2 ml-4 font-semibold'>2 pack</h1>
        </div>
        <div className='flex mt-[-2rem] justify-end mr-4'>
            <h1 className='mt-2 ml-4 font-semibold text-gray-600'>start from</h1>
            <h1 className='mt-2 ml-4 font-semibold text-lg'>$1,56</h1>
        </div>
       </div>
       <div className='w-[510px] h-[44px] border  rounded-lg mt-[0.5rem] focus-within:border-green-600'>
        <div className='flex'>
           <input type="radio" className='ml-4 w-5 h-5 mt-2.5'/> 
           <h1 className='mt-2 ml-4 font-semibold'>3 pack</h1>
        </div>
        <div className='flex mt-[-2rem] justify-end mr-4'>
            <h1 className='mt-2 ml-4 font-semibold text-gray-600'>start from</h1>
            <h1 className='mt-2 ml-4 font-semibold text-lg'>$1,56</h1>
        </div>
       </div>
       <div className='w-[510px] h-[44px] border  rounded-lg mt-[0.5rem] focus-within:border-green-600'>
        <div className='flex'>
           <input type="radio" className='ml-4 w-5 h-5 mt-2.5'/> 
           <h1 className='mt-2 ml-4 font-semibold'>4 pack</h1>
        </div>
        <div className='flex mt-[-2rem] justify-end mr-4'>
            <h1 className='mt-2 ml-4 font-semibold text-gray-600'>start from</h1>
            <h1 className='mt-2 ml-4 font-semibold text-lg'>$1,56</h1>
        </div>
       </div>
       <div className='w-[510px] h-[44px] border  rounded-lg mt-[0.5rem] focus-within:border-green-600'>
        <div className='flex'>
           <input type="radio" className='ml-4 w-5 h-5 mt-2.5'/> 
           <h1 className='mt-2 ml-4 font-semibold'>5 pack</h1>
        </div>
        <div className='flex mt-[-2rem] justify-end mr-4'>
            <h1 className='mt-2 ml-4 font-semibold text-gray-600'>start from</h1>
            <h1 className='mt-2 ml-4 font-semibold text-lg'>$1,56</h1>
        </div>
       </div>
       </div>

        <div className='flex items-center gap-2 mt-5'>
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        </div>
        <div className='ml-[30.5rem] mt-[-4rem] absolute flex'>
        <div className=''>
        <del className='text-gray-600'>$12.56</del>
        <h1 className='text-2xl font-semibold'> $15.56</h1>
        </div>
        <div className='flex items-center gap-4 ml-[16.8rem]'>
        <CiHeart className='text-2xl text-green-600'/>
        <button className='bg-green-600 text-white py-3 px-6 rounded-lg'>Add to card</button>
        </div>
        </div>
        <h1 className='text-4xl font-bold mt-16'>Product information.</h1>
        <hr className='mt-5'/>
        <div>
            <div className='mt-5 flex gap-20'>
                <div>
                <p className='flex gap-2'><GoDotFill className='mt-1'/>EEDRA Cilantro Seeds - contains 300 seeds in 1 Pack and professional <br /> instructions created by PhD Helga George</p>
                <p className='flex gap-2'><GoDotFill className='mt-1'/>Be sure of our quality - the freshest batches of this season. Non-GMO, <br /> Heirloom - our seeds were tested and have the best germination ratings. <br /> Your easy growing experience is our guarantee</p>
                <p className='flex gap-2'><GoDotFill className='mt-1'/>Cilantro common culinary uses: salsa, guacamole, pesto, salads, <br /> chutney, baked breads, pad thai, pico de gallo, rice, grilled shrimp <br /> skewers, falafel, and more</p>
                <p className='flex gap-2'><GoDotFill className='mt-1'/>Proudly sourced in the USA - our garden seeds are grown, harvested, <br /> and packaged in the USA. We support local farmers and are happy to <br /> produce this American-made product</p>
                <p className='flex gap-2'><GoDotFill className='mt-1'/>SEEDRA customer service - please contact us directly through Amazon <br /> with any questions or concerns about our products. We care about each <br /> customer and do our best to provide you with 100% satisfaction</p>
                </div>
                <div className='w-[475px] h-[198px] border rounded-md'>
                    <div className='flex gap-4 ml-5 mt-5'>
                        <h1 className='text-gray-600'>Package Dimensions</h1>
                        <h1 className='ml-[6rem] font-semibold'>5.51 x 3.5 x 0.35 inches</h1>
                    </div>
                    <hr className='mt-5'/>
                    <div className='flex gap-4 ml-5 mt-5'>
                        <h1 className='text-gray-600'>Item Weight</h1>
                        <h1 className='ml-[6rem] font-semibold'>0.317 ounces</h1>
                    </div>
                    <hr className='mt-5'/>
                    <div className='flex gap-4 ml-5 mt-5'>
                        <h1 className='text-gray-600'>ASIN</h1>
                        <h1 className='ml-[6rem] font-semibold'>B08Z3HN5MP</h1>
                    </div>
                </div>
            </div>
        </div>
        <h1 className='text-4xl font-bold mt-14'>Frequently asked questions.</h1>
        <div className='w-[730px] h-[81px] border rounded-md mt-[1.5rem]'>
            <h1 className='ml-5 mt-4 flex items-center gap-[13rem]'>For seller: are these seeds organic? it does matter if they are <br /> organic, seeds can hold pesticides from the plant they grow from. <FaPlus className='text-green-600'/></h1>
        </div>
        <div className='w-[730px] h-[220px] border rounded-md mt-[1.5rem]'> 
        <h1 className='ml-5 mt-4 flex items-center gap-[23rem]'>Can they be grown on hydroponic systems<FaMinus className='text-green-600'/></h1>
        <hr className='mt-5 w-[582px] ml-5'/>
        <p className='ml-5 mt-5'>I have heat mats and artificial light. <br /> I planted them in all purpose potting soil. Moist not wet. Placed them on a <br /> heat mat. If not available, somewhere where it's 72 degrees. Add natural <br /> light, but I used artificial light. Takes 10- 15 days because of there hard <br /> shell on the seed. </p>
        </div>
        <div className='w-[730px] h-[81px] border rounded-md mt-[2rem]'>
            <h1 className='ml-5 mt-4 flex items-center gap-[17.5rem]'>They did not germinate even when i followed directions. <br /> What should i do? <FaPlus className='text-green-600'/></h1>
        </div>
        <div className='w-[350px] h-[438px] bg-[#EAF1EB] rounded-md -mt-[27.5rem] absolute ml-[47rem]'>
            <img src={img8} alt="" />
            <img className='ml-20 mt-[-4.5rem]' src={img9} alt="" />
            <img className='ml-[18.6rem] mt-[-4.5rem]'  src={img10} alt="" />
            <h1 className='text-2xl font-bold ml-5 mt-5'>Didn’t find answer?</h1>
            <h1 className='ml-5'>Ask your own!</h1>
            <input type="text" placeholder='Type here' className='w-[310px] h-[133px] rounded-md ml-5 mt-5 pl-5 pb-20'/>
            <button className='ml-5 mt-3 bg-green-600 text-white py-3 px-6 rounded-lg'>Send</button>
        </div>
        <div className='flex justify-between mr-60 items-center mt-20'>
            <h1 className='text-2xl font-semibold'>Customer reviews.</h1>
            <button className='text-green-600 py-2 ronded- px-5 border rounded-lg'>Make review</button>
        </div>
        <div className='flex gap-8'>
        <div className='w-[350px] h-[318px] border rounded-lg mt-10'>
            <h1 className='text-5xl ml-6 mt-5 font-bold'>4,1</h1>
            <h1 className='ml-[7rem] mt-[-3rem]'>124 reviews<h1 className='flex text-2xl text-yellow-500'><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/></h1></h1>
            <hr className='ml-5 w-[296px] mt-8'/>
            <div className='mt-5'>
            <img className='ml-5' src={img11} alt="" />
            <img className='ml-5 mt-[0.5rem]' src={img12} alt="" />
            <img className='ml-5 mt-[0.5rem]' src={img13} alt="" />
            <img className='ml-5 mt-[0.5rem]' src={img14} alt="" />
            <img className='ml-5 mt-[0.5rem]' src={img15} alt="" />
            </div>
        </div>
    <div className='w-[730px] h-[347px] border shadow-lg rounded-lg mt-10'>
    <img className='ml-8 mt-8' src={img16} alt="" />
        <div className='flex items-center'>
            <h1 className='font-semibold ml-[7.5rem] mt-[-3rem]'>Carla Samantoes-Diego<h1 className='text-gray-600'>Reviewed in the United States on June 18, 2021</h1></h1>
        <div className='text-xl text-yellow-500 flex mt-[-3rem] ml-[9rem]'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalfAlt/>
        </div>
           </div>
           <p className='ml-8 mt-5 text-lg'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions <br /> created by PhD Helga George <br /> Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our <br /> seeds were tested and have the best germination ratings. </p>
           <hr className='ml-8 w-[652px] mt-5'/>
           <div className='flex gap-4 mt-5'>
           <h1 className='text-gray-600 flex items-center gap-4 ml-8 '>Size<h1 className='text-lg font-semibold text-black'>2 PACK</h1></h1>
           <button className='flex items-center gap-3 text-green-600 px-5 py-1.5 bg-gray-100 rounded-full'><FaCheck/>VERIFIED</button>
           </div>
        </div>
        </div>
        <div className='flex gap-8'>
            <div className='w-[350px] h-[434px] border rounded-lg'>
               <div className='flex items-center'>
               <h1 className='text-gray-600 font-semibold ml-5 mt-5'>124 reviews<h1 className='text-black'>Photo&Video review</h1></h1>
               <h1 className='text-green-600 ml-[7rem] mt-3'>View</h1>
               </div>
               <div className='flex flex-wrap gap-4 ml-5 mt-7'>
               <img src={img17} alt="" />
               <img src={img17} alt="" />
               <img src={img17} alt="" />
               <img src={img17} alt="" />
               </div>
            </div>
            <div className='w-[730px] h-[347px] border shadow-lg rounded-lg mt-10'>
    <img className='ml-8 mt-8' src={img16} alt="" />
        <div className='flex items-center'>
            <h1 className='font-semibold ml-[7.5rem] mt-[-3rem]'>Carla Samantoes-Diego<h1 className='text-gray-600'>Reviewed in the United States on June 18, 2021</h1></h1>
        <div className='text-xl text-yellow-500 flex mt-[-3rem] ml-[9rem]'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalfAlt/>
        </div>
           </div>
           <p className='ml-8 mt-5 text-lg'>Eine sehr aromatische Sorte, wollte die Himbeere gerade noch einmal bestellen, <br /> derzeit nicht verfügbar. So süße Früchte und das jetzt im Oktober, unglaublich</p>
           <div className='flex gap-5 ml-8 mt-2'>
           <img className='w-[80px] h-[80px]' src={img17} alt="" />
           <img className='w-[80px] h-[80px]' src={img17} alt="" />
           </div>
           <hr className='ml-8 w-[652px] mt-5'/>
           <div className='flex gap-4 mt-5'>
           <h1 className='text-gray-600 flex items-center gap-4 ml-8 '>Size<h1 className='text-lg font-semibold text-black'>2 PACK</h1></h1>
           <button className='flex items-center gap-3 text-green-600 px-5 py-1.5 bg-gray-100 rounded-full'><FaCheck/>VERIFIED</button>
           </div>
        </div>
        </div>
        <h1 className='text-3xl font-semibold mt-10'>Related products.</h1>
        <div className='flex gap-8'>
        <div className='w-[350px] h-[512px] border rounded-md mt-10'>
          <img className='ml-8 absolute mt-6' src={img18} alt="" />
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
          <img className='ml-8 absolute mt-6' src={img19} alt="" />
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
          <img className='ml-8 absolute mt-6' src={img20} alt="" />
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
        </div>
    </div>
  )
}

export default Contacts