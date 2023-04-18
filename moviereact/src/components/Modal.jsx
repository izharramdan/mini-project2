import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faInfo, faInfoCircle, faPlay } from '@fortawesome/free-solid-svg-icons'

const Modal = ({ movie, index }) => {
  const [movies, setMovies] = useState([]);

  const getPosterURL = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`;
  };

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=fe218ee83764fa44e44a16cfafcebd10"
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div
        className="modal fade"
        id={`movieModal${index}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content card-content">
            <div className="modal-card">
              <div className="card mb-3" key={index}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={getPosterURL(movie.poster_path)}
                      className="img-fluid"
                      alt="..."
                    />
                    <p>ID: {movie.id}</p>
                    <p>Popularity: {movie.popularity}</p>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h4 className="card-title-modal">
                        {movie.original_title}
                      </h4>
                      <p className="card-text">{movie.overview.slice(0, 100)}....</p>
                      <div className="btn-play">
                        <a href="player.html">
                          <button type="button" className="btn btn-danger">
                            <i className="fa-sharp fa-solid fa-play"><FontAwesomeIcon icon={faPlay} /></i>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
