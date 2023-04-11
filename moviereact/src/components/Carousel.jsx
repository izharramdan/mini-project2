import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";

const Carousel = () => {
  const [movies, setMovies] = useState([]);

  const getPosterURL = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w1280${posterpath}`;
  };

  useEffect(() => {
    // const firstCarousel = document.querySelector(".carousel-item");
    // firstCarousel.classList.add("active");
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=fe218ee83764fa44e44a16cfafcebd10"
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel carousel-hero slide"
      data-bs-ride="false"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        {movies.slice(0, 3).map((movie, index) => {
          return (
            <div key={index}>
              {index === 0 ? (
                <div className="carousel-item active">
                  <img
                    src={getPosterURL(movie.backdrop_path)}
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption">
                    <div className="btn-play">
                      <a href="player.html" id="buttonAlert1">
                        <button type="button" className="btn btn-danger">
                          <i className="fa-sharp fa-solid fa-play"></i>
                        </button>
                      </a>
                    </div>
                    <div className="carousel-ket">
                      <h3>{movie.title}</h3>
                      <p>{movie.overview}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="carousel-item">
                  <img
                    src={getPosterURL(movie.backdrop_path)}
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption">
                    <div className="btn-play">
                      <a href="player.html" id="buttonAlert1">
                        <button type="button" className="btn btn-danger">
                          <i className="fa-sharp fa-solid fa-play"></i>
                        </button>
                      </a>
                    </div>
                    <div className="carousel-ket">
                      <h3>{movie.title}</h3>
                      <p>{movie.overview}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default Carousel;
