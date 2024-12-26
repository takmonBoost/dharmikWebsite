import React from 'react'
import Slider from "../components/Slider.jsx"
import CharitableTrustSection from '../components/CharitableTrustSection.jsx'
import ShantiSevaSection from '../components/ShantiSevaSection.jsx'
import DonationCard from "../components/DonationCards"
import Header from '../components/Header.jsx'
import SanatanDharmaSection from '../components/SanatanDharmaSection.jsx'
import NewsUpdatesSection from '../components/NewsUpdatesSection.jsx'
import CardsSection from '../components/CardsSection.jsx'
import UpcomingEvents from '../components/UpcomingEvents.jsx'
import Navbar from '../components/Navbar.jsx'
import EventSchedule from '../components/EventSchedule.jsx'
import HeroAwardLayout from '../components/HeroAwardLayout.jsx'
import DharmaProtectionSection from '../components/DharmaProtectionSection.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  const sectionTitle = "NEWS & Updates";

  const video1 = {
    title: "Special Announcement",
    src: "https://www.youtube.com/embed/1noVljS4WPg",
  };

  const video2 = {
    title: "Latest Highlights",
    src: "https://www.youtube.com/embed/NvwGsfdRhZI",
  };

  const sectionTitle1 = "सनातन जागृति यात्रा  ";

  const video3 = {
    title: "Special Announcement",
    src: "https://www.youtube.com/embed/0VrbcIMqBps",
  };

  const video4 = {
    title: "Latest Highlights",
    src: "https://www.youtube.com/embed/QZyP-Dv-KpM",
  };
  return (
    <div>
      <Navbar/>
      <Slider/>
     <CharitableTrustSection/>
     <ShantiSevaSection/>
     <DonationCard/>
    <Header/>
    <DonationCard/>
    <SanatanDharmaSection/>
    <NewsUpdatesSection
        sectionTitle={sectionTitle}
        video1={video1}
        video2={video2}
      />
          <NewsUpdatesSection
        sectionTitle={sectionTitle1}
        video1={video3}
        video2={video4}
      />
      <CardsSection/>
      <UpcomingEvents/>
      <EventSchedule/>
      <HeroAwardLayout/>
      <DharmaProtectionSection/>
      <Footer/>
    </div>
  )
} 

export default Home