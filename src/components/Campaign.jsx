import React from 'react'

const Campaign = () => {
  return (
    <div className='bg-[#FAFAFA] w-full z-0'>
      <div className='container mx-auto 2xl:px-32 py-6'>
        <div className='text-[16px] font-semibold mb-2 text-gray-700'>Kampanyalar</div>
        <div className='bg-kampanyaBG bg-headerColor rounded-xl min-h-[320px] flex items-center my-6 justify-between'>
          <div className='text-white ml-12'>
            <h4 className='text-3xl  font-bold'>Getiri indirin!</h4>
            <div className='w-max-[360px] text-[16px] font-semibold mt-3'>
              İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.
            </div>
            <div className='pt-8 flex gap-x-3'>
              <img src={process.env.PUBLIC_URL + '/images/app.svg'} />
              <img src={process.env.PUBLIC_URL + '/images/googlePlay.svg'} />
              <img src={process.env.PUBLIC_URL + '/images/huaweiApp.svg'} />
            </div>
          </div>

          <img className='object-cover ml-2 mt-6' src={process.env.PUBLIC_URL + '/images/phoneLanding.png'} />

        </div>
      </div>

    </div>
  )
}

export default Campaign