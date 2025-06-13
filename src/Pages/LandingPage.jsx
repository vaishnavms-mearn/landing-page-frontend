import React from 'react'
import HeroSection from '../Components/HeroSection'
import Destinations from '../Components/Destinations'
import OurAdvantages from '../Components/OurAdvantages'
import TopSellingPackages from '../Components/TopSellingPackages'
import Testimonials from '../Components/Testimonials'

function LandingPage() {
  return (
    <div>
        <HeroSection/>
        <Destinations/>
        <OurAdvantages/>
        <TopSellingPackages/>
        <Testimonials/>
    </div>
  )
}

export default LandingPage