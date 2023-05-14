import React from 'react'

const FooterMenu = ({ title, icerik }) => {


    return (
        <div>
            <div className='mb-4 text-lg text-purple-500'>{title}</div>
            <nav>
                <ul className='space-y-3 text-gray-700'>
                    {
                        icerik.map((el, idx) => (
                            <li className=' text-sm' key={idx}>{el.title}</li>
                        ))
                    }
                </ul>
            </nav>

        </div>
    )
}

export default FooterMenu