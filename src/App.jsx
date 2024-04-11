import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './component/Navbar'
const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/mission' element={<Home/>} />
        <Route path='/services' element={<Home/>} />
        <Route path='/faq' element={<Home/>} />
      </Routes>
    </>
  )
}

export default App