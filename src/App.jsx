/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import Home from './components/Home'
import Lenis from 'lenis'
const App = () => {
  const lenis = new Lenis({
    autoRaf: true,
  });
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
