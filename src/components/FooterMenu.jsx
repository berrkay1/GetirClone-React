import React, { useState } from 'react'
import { Collapse } from 'react-collapse';
import { GoChevronDown } from 'react-icons/go';
import { useWindowWidth } from '@react-hook/window-size'
const FooterMenu = ({ title, icerik }) => {

    const [collapse, setCollapse] = useState(true);
    const windowWidth = useWindowWidth();
    return (
        <div onClick={() => setCollapse(!collapse)} className='flex  justify-between'>
            <div>
                <div className='mb-4 text-lg text-purple-500'>{title}</div>
                <Collapse isOpened={windowWidth > 768 ? true : collapse}>
                    <nav>
                        <ul className='space-y-3 my-3 text-gray-700 duration-300'>
                            {
                                icerik.map((el, idx) => (
                                    <li className='transition ease-in duration-700 text-sm' key={idx}>{el.title}</li>
                                ))
                            }
                        </ul>

                    </nav>
                </Collapse>
            </div>

            <div className='block md:hidden '>
                <div className='w-5 h-5 bg-purple-100 flex items-center justify-center rounded-lg' >
                    <GoChevronDown size={18} className='duration-500 text-purple-500' style={{ rotate: `${collapse ? '180deg' : '0deg'}` }} />
                </div>
            </div>

        </div>
    )
}

export default FooterMenu