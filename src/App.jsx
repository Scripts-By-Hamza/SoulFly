import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Flights from './pages/Flights'
import Hotels from './pages/Hotels'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/hotels" element={<Hotels />} />
      </Routes>
    </HashRouter>
  )
}

export default App
