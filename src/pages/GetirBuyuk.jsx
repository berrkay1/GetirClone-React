import React, { useState } from 'react'
import GetirBigHeaderSec from '../components/GetirBigHeaderSec'
import Categories from '../components/Categories'
import Campaign from '../components/Campaign'
import Footer from '../components/Footer'
import CartsCampagn from '../components/CartsCampagn'

const GetirBuyuk = () => {

  const [cartList,setCartList] = useState([
    {
        img:'https://getir.com/_next/static/images/intro-market-basket-8ca56a5e5a21b80ccb71403d77df83d8.svg',
        title:'Binlerce çeşit',
        desc:'Kasaptan manava, ev bakım ürünlerinden kişisel bakım ürünlerine binlerce çeşidi kolayca bulabilirsiniz.'
    },
    {
        img:'https://getir.com/_next/static/images/intro-market-delivery-86c4407609c24bbdf92feb222d7baca0.svg',
        title:'Uygun fiyatlı ürünler',
        desc:'GetirBüyük’te binlerce ürünü uygun fiyata sipariş verirsiniz.'
    },
    {
        img:'https://getir.com/_next/static/images/intro-market-fee-586c3e4c701b44396ac99828259e9d7f.svg',
        title:'Kapınıza teslimat',
        desc:'Siparişleriniz kapınıza kadar gelir.'
    },
]) 

  return (
    <>
      <GetirBigHeaderSec />
      <Categories />
      <Campaign />
      <CartsCampagn cartList={cartList} />
      <Footer />
    </>
  )
}

export default GetirBuyuk