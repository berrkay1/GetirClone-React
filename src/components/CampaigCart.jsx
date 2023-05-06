import React from 'react'

const CampaigCart = ({img,title,desc}) => {
  return (
    <div className='flex flex-col items-center justify-center flex-1 shadow-xl pt-16 pb-10 p-3 mt-auto bg-white' >
        <img src={img}  />
        <h4 className='mt-6 text-purple-700 font-semibold text-[18px]'>{title}</h4>
        <h5 className='text-center mt-4 text-gray-500 font-normal text-[15px] px-3'>{desc}</h5>
    </div>
  )
}

export default CampaigCart