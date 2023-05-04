import React from 'react'
import CategoriesJson from '../jsons/categories.json'
import CategoriesCart from './CategoriesCart'

const Categories = () => {
  return (
    <div className='bg-white w-full'>
      <div className='container mx-auto py-6'>
        <div className='text-[16px] font-semibold mb-2 text-gray-700'>Katogoriler</div>
        <div className='grid grid-cols-10 gap-4'>
          {
            CategoriesJson.map((item, idx) => (

              <CategoriesCart key={idx} item={item} />

            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Categories