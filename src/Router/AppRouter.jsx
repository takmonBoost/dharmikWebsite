import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from '../pages/Home.jsx';
import AboutUS from "../pages/AboutUS.jsx"
import DonateNow from "../pages/DonateNow.jsx"
import Gallery from "../pages/Gallery.jsx"
import Schedule from "../pages/Schedule.jsx"
import SanatanDharm from '../pages/SanatanDharm.jsx';
import Video from '../pages/Video.jsx';



const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/gallery' element={ <Gallery/> } />
        <Route path='/schedule' element={<Schedule/>} />
        <Route path='/donate' element={ <DonateNow/> } />
        <Route path='/about/aboutus' element={ <AboutUS/> } />
        <Route path='/sanatan-dharm/events' element={ <SanatanDharm/> } />
        <Route path='/gallery/videos' element={ <Video/> } />
    
      </Routes>
    </div>
  )
}

export default AppRouter