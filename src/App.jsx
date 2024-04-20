import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import OurMission from './pages/OurMission';
import Footer from './component/Footer';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Implant from './pages/Implant';
import SleepApnea from './pages/SleepApnea';
import DSO from './pages/DSO';
import SleepScale from './pages/SleepScale';
import Admin from './pages/Admin';
import AdminHome from './pages/AdminHome';

const App = () => {
  const location = useLocation();
  const adminPaths = ['/admin', '/adminHome'];  // List of paths where Navbar and Footer should not be shown
  const showNavbarAndFooter = !adminPaths.includes(location.pathname);

  return (
    <>
      {showNavbarAndFooter && <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mission' element={<OurMission />} />
        <Route path='/services/implants' element={<Implant />} />
        <Route path='/services/SleepApnea' element={<SleepApnea />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/DSO' element={<DSO />} />
        <Route path='/sleepscale' element={<SleepScale />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/adminHome' element={<AdminHome />} />
      </Routes>

      {showNavbarAndFooter && <Footer />}
    </>
  );
};

export default App;
