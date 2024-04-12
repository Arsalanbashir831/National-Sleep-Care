import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import OurMission from './pages/OurMission'
import Footer from './component/Footer'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Implant from './pages/Implant'
import SleepApnea from './pages/SleepApnea'

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/mission' element={<OurMission/>} />
        <Route path='/services/implants' element={<Implant/>} />
        <Route path='/services/SleepApnea' element={<SleepApnea/>} />
        <Route path='/faq' element={<FAQ/>} />
        <Route path='/contact' element={ <Contact/>} />
       
      </Routes>
      <Footer></Footer>
      
      
      
    </>
    
  )
  
}

export default App