import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size'
import ReactFlagsSelect from 'react-flags-select';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { IoLocateSharp } from 'react-icons/io5';


const VideoSection = () => {

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const windowWidth = useWindowWidth();
    const [selected, setSelected] = useState('')
    const onVideoEnd = () => {
        if (currentVideoIndex === videoUrl.length - 1) {
            // Son video tamamlandığında, sırayı sıfırlayın.
            setCurrentVideoIndex(0);
        } else {
            // Sonraki videoya geçin.
            setCurrentVideoIndex(currentVideoIndex + 1);
        }

    };

    const videoUrl = [
        'https://cdn.getiryemek.com/banner/1_hamburger.mp4',
        'https://cdn.getiryemek.com/banner/2_doner.mp4',
        'https://cdn.getiryemek.com/banner/3_pide.mp4',
        'https://cdn.getiryemek.com/banner/4_pizza.mp4',
        'https://cdn.getiryemek.com/banner/5_kunefe.mp4',
    ]

    useEffect(() => {

    }, [currentVideoIndex])


    return (
        <div className='relative w-full h-auto md:h-[600px] '>
            {
                windowWidth > 768 && videoUrl.map((video, index) => (
                    <video autoPlay style={{ display: index === currentVideoIndex ? 'block' : 'none' }} key={index} onEnded={onVideoEnd} className='w-full h-full object-cover' src={video}></video>
                ))
            }

            <div className='h-16 bg-[#5D3EBC] md:hidden  text-lg  font-bold relative z-50 top-0 left-0 flex items-center justify-center'>
                <span className='text-yellow-400'>getir<span className='text-white'>yemek</span></span>
            </div>

            <div className='md:container relative md:absolute top-0 text-white z-30 w-full h-full flex items-center justify-between  left-1/2  -translate-x-1/2 2xl:px-32'>
                <div className='text-4xl font-semibold hidden md:block'>

                </div>

                <div className='bg-[#FAFAFA] p-6 rounded-none md:rounded-lg  md:w-[400px] w-full'>

                    <h5 className=' text-[#5d3ebc] text-center text-[16px] font-semibold'> Adresine getiren restoranları gör</h5>

                    <div className='flex items-center justify-center my-4 w-full gap-x-2'>
                        <div className='h-[56px] pb-1 shadow-sm rounded-sm w-full border-solid border-gray-300 border-2 outline-none mb-[5px] flex items-center justify-between px-3' >
                            <div className='flex items-center space-x-2 px-1'>
                                <RxMagnifyingGlass className='text-[#5d3ebc]' size={22} />
                                <div className='text-gray-500 text-sm'>Örn. Etiler mh.</div>
                            </div>
                            <div className='flex items-center space-x-2 bg-[#a2a2a2] rounded-lg p-1.5'>
                                <IoLocateSharp className='text-white text-opacity-80' size={22} />
                                <div className='text-white text-opacity-80 font-semibold text-sm'>Konumumu bul</div>
                            </div>
                        </div>
                    </div>

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
                            <input className='input h-[56px] pb-1 rounded-sm w-full border-solid border-gray-200 border-2 focus:border-purple-600 outline-none mb-[5px]' />
                            <span className='absolute text-gray-700 text-sm h-full left-8 top-0 flex items-center z-0 peer-hover:h-5'>Telefon Numarası</span>
                        </div>
                    </div>
                    <button className='h-12 bg-[#FFD300] text-center w-full text-[#5d3ebc] font-semibold text-sm rounded-md hover:bg-[#7849F7] hover:text-[#FFD300] duration-200'>Telefon numarasıyla devam et</button>
                </div>
            </div>
        </div>
    )
}

export default VideoSection