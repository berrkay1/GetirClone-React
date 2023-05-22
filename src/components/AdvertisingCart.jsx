import React from 'react'

const AdvertisingCart = () => {
    return (
        <div className='bg-[#FAFAFA] w-full z-0'>
            <div className='container mx-auto py-6'>

                <div className='bg-kampanyaBG2 object-contain rounded-xl min-h-[214px] flex items-center my-6 justify-between px-12'>
                    <div className='flex flex-col pl-10'>
                        <div className='text-purple-700  text-[28px] font-bold mb-2' >
                            Restoran sahibi misiniz?
                        </div>
                        <div className='text-gray-500  text-[16px] font-semibold' >
                            GetirYemek restoran iş ortaklarından biri olun, işinizi daha az maliyetle büyütün, müşteri memnuniyetini artırın.
                        </div>
                    </div>
                    <a href='#' className='bg-[#ffe430] text-sm font-semibold text-purple-600 px-7 py-4 rounded-sm cursor-pointer'>
                        Hemen Başvur
                    </a>

                </div>
            </div>

        </div>
    )
}

export default AdvertisingCart