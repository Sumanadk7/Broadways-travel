import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom' 
import Flights from './pages/Flights'
import Activities from './pages/Activities'
import Packages from './pages/Packages'
import Events from './pages/Events'
import Signin from './pages/Signin'

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/activities" element={<Activities/>}/>\
        <Route path="/packages" element={<Packages />} />
        <Route path="/events" element={<Events />} />
        <Route path="*" element={<Signin/>} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
