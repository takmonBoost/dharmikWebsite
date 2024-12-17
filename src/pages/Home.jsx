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

const Home = () => {
  const sectionTitle = "NEWS & Updates";

  const video1 = {
    title: "Special Announcement",
    src: "https://vssct.com/wp-content/uploads/2024/11/CujvXGJbBXjrqbTr.mp4",
  };

  const video2 = {
    title: "Latest Highlights",
    src: "https://vssct.com/wp-content/uploads/2024/11/l6gg83umQJPHoGOR.mp4",
  };

  const sectionTitle1 = "सनातन जागृति यात्रा  ";

  const video3 = {
    title: "Special Announcement",
    src: "https://vssct.com/wp-content/uploads/2024/11/CujvXGJbBXjrqbTr.mp4",
  };

  const video4 = {
    title: "Latest Highlights",
    src: "https://vssct.com/wp-content/uploads/2024/11/CujvXGJbBXjrqbTr.mp4",
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
    {/* <NewsUpdatesSection
        sectionTitle={sectionTitle}
        video1={video1}
        video2={video2}
      />
          <NewsUpdatesSection
        sectionTitle={sectionTitle1}
        video1={video3}
        video2={video4}
      /> */}
      <CardsSection/>
      <UpcomingEvents/>
      <EventSchedule/>
    </div>
  )
} 

export default Home