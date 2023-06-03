import React from 'react'
import CampaigCart from './CampaigCart'

const CartsCampagn = ({ cartList }) => {
  return (
    <div className=' w-full container mx-auto 2xl:px-32'>
      <div className='grid grid-cols-3 gap-x-4 '>
        {
          cartList?.map((item, idx) => (
            <CampaigCart
              key={idx}
              img={item.img}
              title={item.title}
              desc={item.desc}
            />
          ))
        }

      </div>
    </div>

  )
}

export default CartsCampagn