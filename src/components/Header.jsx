import React from 'react'
import { RiGlobalLine } from 'react-icons/ri'
import { FaUser } from 'react-icons/fa'
import { FaUserPlus } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'



const Header = () => {

    const location = useLocation();
    const activePage = location.pathname;

console.log('activePage', activePage)
    return (
        <div className=' bg-headerColor sticky top-0 z-20'>
            <div className='container mx-auto h-12 flex items-center justify-between'>
                <nav className='flex items-center gap-x-4'>
                    <Link to={'/'} >
                        <div className={`text-${activePage == '/' ? '[#FFD300]' : 'white'} text-[17px] font-semibold text-opacity-${activePage == '/' ? '100' : '80'}`}>
                            <span className={`hover:bg-[#5D3EBC] p-[13px] pt-1 rounded-t-md  bg-${activePage == '/' ? '[#5D3EBC]' : ''}`}>getir</span>
                        </div>
                    </Link>
                    <Link to={'/getiryemek'}>
                        <div className={`text-[17px] font-semibold `}>
                            <span
                                className={`hover:bg-[#5D3EBC] p-[13px] pt-1 rounded-t-md text-${activePage == '/getiryemek' ? '[#FFD300]' : 'white'} text-opacity-${activePage == '/getiryemek' ? '100' : '80'} bg-${activePage == '/getiryemek' ? '[#5D3EBC]' : ''}`}>
                                getir
                                <span
                                    className={`text-opacity-${activePage == '/getiryemek' ? '90' : '80'} text-white`}>
                                    yemek
                                </span>
                            </span>

                        </div>
                    </Link>
                    <Link to={'/getirbuyuk'}>
                        <div className={` text-[17px] font-semibold `}>
                            <span
                                className={`hover:bg-[#5D3EBC] p-[13px] pt-1 rounded-t-md text-${activePage == '/getirbuyuk' ? '[#FFD300]' : 'white'} text-opacity-${activePage == '/getirbuyuk' ? '100' : '80'} bg-${activePage == '/getirbuyuk' ? '[#5D3EBC]' : ''}`}>
                                getir
                                <span
                                    className={`text-opacity-${activePage == '/getirbuyuk' ? '90' : '80'} text-white`}>
                                    büyük
                                </span>
                            </span>

                        </div>
                    </Link>
                    <Link to={'/getirsu'}>
                        <div className={` text-[17px] font-semibold `}>
                            <span
                                className={`hover:bg-[#5D3EBC] p-[13px] pt-1 rounded-t-md text-${activePage == '/getirsu' ? '[#FFD300]' : 'white'} text-opacity-${activePage == '/getirsu' ? '100' : '80'} bg-${activePage == '/getirsu' ? '[#5D3EBC]' : ''}`}>
                                getir
                                <span
                                    className={`text-opacity-${activePage == '/getirsu' ? '90' : '80'} text-white`}>
                                    su
                                </span>
                            </span>

                        </div>
                    </Link>

                </nav>

                <nav className='flex items-center gap-x-9'>
                    <a href="#" className='text-[white] text-[14px] font-normal text-opacity-80 flex items-center  '>
                        <RiGlobalLine size={19} />
                        <span className='pl-2'>Türkçe (TR)</span>
                    </a>
                    <a href="#" className='text-white text-[14px] font-normal text-opacity-80 flex items-center'>
                        <FaUser size={19} />
                        <span className='pl-2'> Giriş Yap</span>

                    </a>
                    <a href="#" className='text-white text-[14px] font-normal text-opacity-80 flex items-center'>
                        <FaUserPlus size={19} />
                        <span className='pl-2'> Kayıt Ol</span>

                    </a>

                </nav>

            </div>
        </div>
    )
}

export default Header