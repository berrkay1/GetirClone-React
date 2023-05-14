import React from 'react'

import HeaderSection from '../components/HeaderSection'
import Categories from '../components/Categories'
import Campaign from '../components/Campaign'
import MobileAppBar from '../components/MobileAppBar'
import Footer from '../components/Footer'

const Getir = () => {
    return (
        <div className="relative">
            
            <HeaderSection />
            <Categories />
            <Campaign />
            <MobileAppBar />
            <Footer />
        </div>
    )
}

export default Getir