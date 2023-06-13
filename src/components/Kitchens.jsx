import React from 'react'
import KitchenCategoryJson from '../jsons/KitchensCategories.json'
import Slider from "react-slick";
import { FaChevronRight } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';

const Kitchens = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    function NextArrow(props) {
        const { className, onClick } = props;
        return (
            <button
                className={`${className}!text-purple-700 absolute top-1/2 -right-7 -translate-y-1/2`}
                onClick={onClick}
            ><FaChevronRight size={20} className='text-purple-700' /></button>
        );
    }

    function PrevArrow(props) {
        const { className, onClick } = props;
        return (
            <button
                className={`${className}!text-purple-700 absolute top-1/2 -left-7 -translate-y-1/2`}
                onClick={onClick}
            >
                <FaChevronLeft size={20} className='text-purple-700' />
            </button>
        );
    }

    return (
        <div className='bg-[#fafafa] w-full  z-40'>
            <div className='container mx-auto py-6 '>
                <div className='text-[16px] font-semibold mb-5 text-gray-700'>Mutfaklar</div>
                <Slider {...settings}>

                    {
                        KitchenCategoryJson.map((item, idx) => (
                            <div key={idx} className='py-2 flex items-center justify-center'>
                                <div className='rounded-md mr-4 bg-white shadow-md '>
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