import React from 'react'
import CategoriesJson from '../jsons/categories.json'
import CategoriesCart from './CategoriesCart'

const Categories = () => {
  return (
    <div className='bg-white w-full shadow-2xl z-40'>
      <div className='container mx-auto 2xl:px-32 py-6'>
        <div className='text-[16px] font-semibold mb-2 text-gray-700'>Kategoriler</div>
        <div className='grid md:grid-cols-5 lg:grid-cols-10 grid-cols-3 gap-4'>
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