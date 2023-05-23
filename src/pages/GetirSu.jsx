import React, { useState } from 'react'
import GetirBigHeaderSec from '../components/GetirBigHeaderSec'
import Categories from '../components/Categories'
import Campaign from '../components/Campaign'
import CartsCampagn from '../components/CartsCampagn'
import Footer from '../components/Footer'
import GetirSuHeaderSection from '../components/GetirSuHeaderSection'

const GetirSu = () => {
  
  const [cartList,setCartList] = useState([
    {
        img:'https://getir.com/_next/static/images/intro-water-change-05d8f4c369edbc0b5d9ac178ae7892c8.svg',
        title:'Damacana değişim ücreti yok',
        desc:'Siparişlerinizde elinizde Kuzeyden ya da başka bir marka damacana bulunması durumunda damacana değişimi ücretsizdir.'
    },
    {
        img:'https://getir.com/_next/static/images/intro-water-all-days-1714ab40588b3e39076584f5465f41b9.svg',
        title:'7 gün 08.00-24.00 arası hizmet',
        desc:'GetirSu hafta içi hafta sonu demeden gece 24.00 e kadar suyunuzu kapınıza getirir.'
    },
    {
        img:'https://getir.com/_next/static/images/intro-water-fee-a8a5868d3c7a8dc9dd11b9a97de34c30.svg',
        title:'Teslimat ücreti yok',
        desc:'GetirSu’da siparişiniz için teslimat ücreti ödemezsiniz.'
    },
]) 
  return (
  <>
      <GetirSuHeaderSection/>
      <Campaign />
      <CartsCampagn cartList={cartList} />
      <Footer />
    </>
  )
}

export default GetirSu