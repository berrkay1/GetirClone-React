import React, { useState } from 'react'
import { Collapse } from 'react-collapse';


const FooterMenu = ({ title, icerik }) => {

    const [collapse, setCollapse] = useState(true);

    return (
        <div>
            <div onClick={() => setCollapse(!collapse)} className='mb-4 text-lg text-purple-500'>{title}</div>
            <Collapse isOpened={collapse}>
                <nav>
                    <ul className='space-y-3 text-gray-700 duration-300'>
                        {
                            icerik.map((el, idx) => (
                                <li className='transition ease-in duration-700 text-sm' key={idx}>{el.title}</li>
                            ))
                        }
                    </ul>
                </nav>
            </Collapse>


        </div>
    )
}

export default FooterMenu