import React from 'react'
import Navbar from '../components/Navbar'
import AboutSection from '../components/AboutSection'
import BiographySection from "../components/BiographySection"
import AboutVSSCTSection from '../components/AboutVSSCTSection'
import AboutPriyakantJuTemple from '../components/AboutPriyakantJuTemple'
import Footer from "../components/Footer"
const AboutUS = () => {
  return (
    <>
    <Navbar />
    <AboutSection/>
    <BiographySection/>
    <AboutVSSCTSection/>
    <AboutPriyakantJuTemple/>
    <Footer/>
    </>
  )
}

export default AboutUS