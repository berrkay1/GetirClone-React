import React from 'react'

const CampaigCart = ({img,title,desc}) => {
  return (
    <div className='flex flex-col items-center justify-center flex-1 shadow-xl pt-16 pb-10 p-3 text-center' >
        <img className='w-[150px] h-[150px] mb-6' src={img}  />
        <h4 className=' text-purple-700 font-semibold px-14 text-[18px]'>{title}</h4>
        <h5 className='text-center mt-4 text-gray-500 font-normal text-[15px] px-8'>{desc}</h5>
    </div>
  )
}

export default CampaigCart