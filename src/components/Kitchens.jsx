import React from 'react'
import KitchenCategoryJson from '../jsons/KitchensCategories.json'
import Slider from "react-slick";

const Kitchens = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8
    };

    return (
        <div className='bg-[#fafafa] w-full shadow-2xl z-40'>
            <div className='container mx-auto py-6'>
                <div className='text-[16px] font-semibold mb-5 text-gray-700'>Mutfaklar</div>
                <Slider {...settings}>

                    {
                        KitchenCategoryJson.map((item, idx) => (
                            <div key={idx} className=''>
                                <div  className='rounded-md mr-4 bg-white shadow-md '>
                                    <img className=' object-cover rounded-md px-2' src={item.image} />
                                    <div className='text-purple-600 text-xs text-center border-t-2 border-gray-100 py-3'>{item.title}</div>
                                </div>
                            </div>
                        ))
                    }

                </Slider>
            </div>

        </div>
    )
}

export default Kitchens