import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const VideoSection = () => {

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

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

    useEffect(()=>{

    },[currentVideoIndex])

   
    return (
        <div className=' w-full h-[600px] '>
            {
                videoUrl.map((video, index) => (
                    <video  autoPlay style={{ display: index === currentVideoIndex ? 'block' : 'none' }} key={index} onEnded={onVideoEnd} className='w-full h-full object-cover' src={video}></video>
                ))
            }
        </div>
    )
}

export default VideoSection