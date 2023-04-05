import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

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
