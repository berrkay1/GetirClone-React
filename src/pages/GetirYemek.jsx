import React, { useState } from 'react'
import VideoSection from '../components/getirBuyuk/VideoSection'
import Kitchens from '../components/Kitchens'
import CartsCampagn from '../components/CartsCampagn'
import Footer from '../components/Footer'
import AdvertisingCart from '../components/AdvertisingCart'

const GetirYemek = () => {

    const [cartList, setCartList] = useState([
        {
            img: 'https://getir.com/_next/static/images/intro-courier-71fe5640548ab5def63f180df7e79a5c.svg',
            title: 'Binlerce restorandan yemeğinizi görerek seçin!',
            desc: ''
        },
        {
            img: 'https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg',
            title: 'Haftanın her günü bulabileceğiniz yüzlerce kampanya ile indirimli fiyatlardan yararlanın!',
            desc: ''
        },
        {
            img: 'https://getir.com/_next/static/images/intro-foods-17936a3941c6c42663b203911b0e744d.svg',
            title: 'Kredi kartı, kapıda ya da yemek kartları ile hızlı ve güvenli ödeme yapın!',
            desc: ''
        },
    ])

    return (
        <div>
            <VideoSection />
            <Kitchens />
            <CartsCampagn cartList={cartList} />
            <AdvertisingCart />

            <Footer />
        </div>
    )
}

export default GetirYemek