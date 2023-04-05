import { useState, useEffect } from 'react'
import axios from 'axios'


const Card = () => {

  const [movies, setMovies] = useState([])

const getPosterURL = (posterpath) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}

useEffect(() => {
  axios.get('https://api.themoviedb.org/3/movie/popular?api_key=fe218ee83764fa44e44a16cfafcebd10').then(response=>{
    setMovies(response.data.results)
  }).catch(err => {console.log(err);})

},[])
    return (
      <div className="trending">
      <div className="cards-wrapper">
      {movies.slice(0,5).map((movie, index)=>{
      return (
        <>
        <div className="card text-bg-dark">
          <div className="card-img"></div>
          <img src={getPosterURL(movie.poster_path)} className="card-img" alt="..." />
          <div className="card-img-overlay card-col">
            <div className="card-caption">
              <h5 className="card-title">{movie.original_title}</h5>
            </div>
            <div className="button-card">
              <div className="btn-play">
                <a href="player.html"><button type="button" className="btn btn-danger"><i className="fa-sharp fa-solid fa-play"></i></button></a>
              </div>
              <div className="btn-info">
                <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#movie1Modal"><i className="fa-solid fa-circle-info"></i></button>
              </div>
            </div>
          </div>
        </div>
        </>
      )
      })}

      </div>
</div>
    )
}

export default Card