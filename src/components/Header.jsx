import React from 'react'
import { RiGlobalLine } from 'react-icons/ri'
import { FaUser } from 'react-icons/fa'
import { FaUserPlus } from 'react-icons/fa'



const Header = () => {
    return (
        <div className=' bg-headerColor  h-12 flex items-center sticky top-0 z-20'>
            <div className='container mx-auto flex items-center justify-between'>
                <nav className='flex items-center gap-x-4'>
                    <a href="#" className='text-[#FFD300] text-[17px] font-semibold text-opacity-100  '>
                        <span className='hover:bg-[#5D3EBC] p-[13px] pt-1 rounded-t-md active:bg-[#5D3EBC]'>getir</span>
                    </a>
                    <a href="#" className='text-white text-[17px] font-semibold text-opacity-80'>
                        <span className='hover:bg-[#5D3EBC] p-[13px] pt-1 rounded-t-md active:bg-[#5D3EBC]'>getiryemek</span>

                    </a>
                    <a href="#" className='text-white text-[17px] font-semibold text-opacity-80'>
                        <span className='hover:bg-[#5D3EBC] p-[13px] pt-1 rounded-t-md active:bg-[#5D3EBC]'>getirbüyük</span>

                    </a>
                    <a href="#" className='text-white text-[17px] font-semibold text-opacity-80'>
                        <span className='hover:bg-[#5D3EBC] p-[13px] pt-1 rounded-t-md active:bg-[#5D3EBC]'>getirsu</span>

                    </a>
                </nav>

                <nav className='flex items-center gap-x-9'>
                    <a href="#" className='text-[white] text-[16px] font-normal text-opacity-80 flex items-center  '>
                        <RiGlobalLine size={20} />
                        <span className='pl-2'>Türkçe (TR)</span>
                    </a>
                    <a href="#" className='text-white text-[16px] font-normal text-opacity-80 flex items-center'>
                        <FaUser size={20} />
                        <span className='pl-2'> Giriş Yap</span>

                    </a>
                    <a href="#" className='text-white text-[16px] font-normal text-opacity-80 flex items-center'>
                        <FaUserPlus size={20} />
                        <span className='pl-2'> Kayıt Ol</span>

                    </a>

                </nav>

            </div>
        </div>
    )
}

export default Header