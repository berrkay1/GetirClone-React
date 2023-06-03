import React from 'react'
import FooterMenu from './FooterMenu';

const footerArr = [
  {
    title: "Getir'i keşfedin",
    icerik: [
      { title: 'Hakkımızda' },
      { title: 'Kariyer' },
      { title: 'Teknoloji Kariyerleri' },
      { title: 'İletişim' },
      { title: 'Sosyal Sorumluluk Projeleri' },

    ]
  },
  {
    title: "Yardıma mı ihtiyacınız var?",
    icerik: [
      { title: 'Sıkça Sorulan Sorular' },
      { title: 'Kişisel Verilerin Korunması' },
      { title: 'Gizlilik Politikası' },
      { title: 'Kullanım Koşulları' },
      { title: 'Çerez Politikası' },

    ]
  },
  {
    title: "İş Ortağımız Olun",
    icerik: [
      { title: 'Bayimiz Olun' },
      { title: 'Deponuzu Kiralayın' },
      { title: 'GetirYemek Restoranı Olun' },
      { title: 'GetirÇarşı İşletmesi Olun' },
      { title: 'Zincir Restoranlar' }
    ]
  },
];

console.log('footerArr', footerArr)

const Footer = () => {
  return (
    <div className='container mx-auto bg-white 2xl:px-32'>
      <div className='grid grid-cols-4 py-10'>
        <div className=''>
          <h4 className='mb-4 text-lg text-purple-500'>Getiri indirin!</h4>
          <div className='space-y-3 '>
            <img src={process.env.PUBLIC_URL + '/images/app.svg'} />
            <img src={process.env.PUBLIC_URL + '/images/googlePlay.svg'} />
            <img src={process.env.PUBLIC_URL + '/images/huaweiApp.svg'} />
          </div>
        </div>
        {
          footerArr.map((item, idx) => <FooterMenu key={idx} title={item.title} icerik={item.icerik} />)
        }
      </div>

    </div>
  )
}

export default Footer