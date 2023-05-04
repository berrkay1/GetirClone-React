import React from 'react'

const CategoriesCart = ({ item }) => {
    return (
        <div className='flex flex-col items-center justify-center p-2 cursor-pointer hover:bg-purple-100 hover:text-purple-600 duration-300'>
            <div className='w-12 h-12 rounded-md flex items-center justify-center border '>
                <img className='w-full h-full object-cover' src={item.image} />
            </div>
            <div className='text-center'>{item.title}</div>
        </div>
    )
}

export default CategoriesCart