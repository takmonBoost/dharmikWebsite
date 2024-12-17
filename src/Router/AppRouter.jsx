import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from '../pages/Home.jsx';
import AboutUS from "../pages/AboutUS.jsx"
import DonateNow from "../pages/DonateNow.jsx"
import Gallery from "../pages/Gallery.jsx"
import Schedule from "../pages/Schedule.jsx"
import SanatanDharm from '../pages/SanatanDharm.jsx';


const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/about' element={ <AboutUS/> } />
        <Route path='/gallery' element={ <Gallery/> } />
        <Route path='/sanatan-dharm' element={ <SanatanDharm/> } />
        <Route path='/schedule' element={<Schedule/>} />
        <Route path='/donate' element={ <DonateNow/> } />
      </Routes>
    </div>
  )
}

export default AppRouter