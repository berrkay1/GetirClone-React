import React, { useState } from 'react'
import ReactFlagsSelect from 'react-flags-select';
import Slider from "react-slick";
import { useWindowWidth } from '@react-hook/window-size'

const HeaderSection = () => {

  const windowWidth = useWindowWidth();
  console.log('windowWidth', windowWidth)
  const [selected, setSelected] = useState('')

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,

  };


  return (
    <div className='relative before:bg-gradient-to-r before:from-[#5D3EBC] before:to-transparent before:absolute before:top-0 before:left-0 before:z-20 before:w-full before:h-full h-auto md:h-[500px] z-0 '  >

     {windowWidth >= 768 && <Slider {...settings}>
        <div>
          <img className='w-full h-[500px] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg" alt="" />
        </div>
        <div>
          <img className='w-full h-[500px] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg" alt="" />
        </div>
        <div>
          <img className='w-full h-[500px] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg" alt="" />
        </div>
        <div>
          <img className='w-full h-[500px] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg" alt="" />
        </div>

      </Slider>}

      <div className='container relative md:absolute top-0 text-white z-30 w-full h-full flex items-center justify-between  left-1/2 -translate-x-1/2 2xl:px-32'>
        <div className='text-4xl font-semibold hidden sm:block'>
          <img className='w-[180px]' src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="" />

          <div className='mt-10'>
            <span>Dakikalar içinde</span><br />
            <span>kapınızda</span>
          </div>
        </div>

        <div className='bg-[#FAFAFA] p-6 rounded-none sm:rounded-lg  sm:w-[400px] w-full  '>
          <h5 className=' text-[#5d3ebc] text-center text-[16px] font-semibold'>Giriş yap veya kayıt ol</h5>
          <div className='flex items-center justify-center my-4 w-full gap-x-2'>
            <ReactFlagsSelect
              countries={["US", "GB", "FR", "DE", "IT", "TR"]}
              customLabels={{ US: "EN-US", GB: "EN-GB", FR: "FR", DE: "DE", IT: "IT", TR: '+90' }}
              selected='TR'
              className='flag pb-0 bg-white'
              onSelect={code => setSelected(code)}
            />
            <div className='relative w-full'>
              <input className=' input h-[56px] pb-1 rounded-sm w-full border-solid border-gray-200 border-2 focus:border-purple-600 outline-none mb-[5px]' />
              <span className='absolute text-gray-700 text-sm h-full left-8 top-0 flex items-center z-0 peer-hover:h-5'>Telefon Numarası</span>
            </div>
          </div>
          <button className='h-12 bg-[#FFD300] text-center w-full text-[#5d3ebc] font-semibold text-sm rounded-md hover:bg-[#7849F7] hover:text-[#FFD300] duration-200'>Telefon numarasıyla devam et</button>
        </div>
      </div>
    </div>
  )
}

export default HeaderSection