import React, { useState } from 'react'
import HeaderSection from '../components/HeaderSection'
import Categories from '../components/Categories'
import Campaign from '../components/Campaign'
import CartsCampagn from '../components/CartsCampagn'
import Footer from '../components/Footer'



const Getir = () => {
    const [cartList,setCartList] = useState([
        {
            img:'https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg',
            title:'Her siparişinize bir kampanya',
            desc:'Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.'
        },
        {
            img:'https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg',
            title:'Dakikalar içinde kapınızda',
            desc:'Getir’le siparişiniz dakikalar içinde kapınıza gelir.'
        },
        {
            img:'https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg',
            title:'Her siparişinize bir kampanya',
            desc:'Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.'
        },
    ]) 

    return (
        <div className="relative">
            
            <HeaderSection />
            <Categories />
            {/* <Campaign /> */}
            <CartsCampagn cartList={cartList} />
            <Footer />
        </div>
    )
}

export default Getir