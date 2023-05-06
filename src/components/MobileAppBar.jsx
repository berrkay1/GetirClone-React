import React from 'react'
import CampaigCart from './CampaigCart'

const MobileAppBar = () => {
  return (
    <div className=' w-full'>
      <div className='container mx-auto mt-8 flex items-center justify-center space-x-4 flex-wrap '>
        <CampaigCart
          img={'https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg'}
          title='Her siparişinize bir kampanya'
          desc='Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.'
        />
        <CampaigCart
          img={'https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg'}
          title='Dakikalar içinde kapınızda'
          desc='Getir’le siparişiniz dakikalar içinde kapınıza gelir.'
        />
        <CampaigCart
          img={'https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg'}
          title='Her siparişinize bir kampanya'
          desc='Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.'
        />
      </div>
    </div>

  )
}

export default MobileAppBar