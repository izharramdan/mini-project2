import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=fe218ee83764fa44e44a16cfafcebd10').then(response=>{
      setMovies(response.data.results)
    }).catch(err => {console.log(err);})

  },[])

  return (
    <div className="App">

      <div>
      <Navbar />
      <Carousel /> 
      {movies.map((movie, index)=>{
        return <Card key={index} {...movie} />
      })}     
      {/* <Card />    */}
      <Footer />    
      </div>
    </div>
  )
}

export default App
