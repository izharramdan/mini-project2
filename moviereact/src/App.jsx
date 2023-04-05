import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {


  return (
    <div className="App">

      <div>
      <Navbar />
      <Carousel /> 
      
      <Card />   
      <Footer />    
      </div>
    </div>
  )
}

export default App
