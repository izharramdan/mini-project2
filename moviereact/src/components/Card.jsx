function Card() {
    return (
        <section className="trending">
        <h1>trending now</h1>
              <div className="cards-wrapper">
                <div className="card text-bg-dark">
                  <div className="card-img"></div>
                  <img src="images/vertical poster/jurassic world.jpg" className="card-img" alt="..." />
                  <div className="card-img-overlay card-col">
                    <div className="card-caption">
                      <h5 className="card-title">Jurrasic World: Dominion</h5>
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
                <div className="card text-bg-dark">
                  <img src="images/vertical poster/air-final-poster.jpg" className="card-img" alt="..." />
                  <div className="card-img-overlay card-col">
                    <div className="card-caption">
                      <h5 className="card-title">Air: Courting A Legend</h5>
                    </div>
                    <div className="button-card">
                      <div className="btn-play">
                        <a href="player.html"><button type="button" className="btn btn-danger"><i className="fa-sharp fa-solid fa-play"></i></button></a>
                      </div>
                      <div className="btn-info">
                        <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#movie2Modal"><i className="fa-solid fa-circle-info"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card text-bg-dark">
                  <img src="images/vertical poster/fast-x-poster-1.jpg" className="card-img" alt="..." />
                  <div className="card-img-overlay card-col">
                    <div className="card-caption">
                      <h5 className="card-title">Fast X</h5>
                    </div>
                    <div className="button-card">
                      <div className="btn-play">
                        <a href="player.html"><button type="button" className="btn btn-danger"><i className="fa-sharp fa-solid fa-play"></i></button></a>
                      </div>
                      <div className="btn-info">
                        <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#movie3Modal"><i className="fa-solid fa-circle-info"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card text-bg-dark">
                  <img src="images/vertical poster/mission-impossible-7-poster.jpg" className="card-img" alt="..." />
                  <div className="card-img-overlay card-col">
                    <div className="card-caption">
                      <h5 className="card-title">Mission: Impossible - Dead Reckoning Part One</h5>
                    </div>
                    <div className="button-card">
                      <div className="btn-play">
                        <a href="player.html"><button type="button" className="btn btn-danger"><i className="fa-sharp fa-solid fa-play"></i></button></a>
                      </div>
                      <div className="btn-info">
                        <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#movie4Modal"><i className="fa-solid fa-circle-info"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card text-bg-dark">
                  <img src="images/vertical poster/the-marvels-poster.jpg" className="card-img" alt="..." />
                  <div className="card-img-overlay card-col">
                    <div className="card-caption">
                      <h5 className="card-title">The Marvels</h5>
                    </div>
                    <div className="button-card">
                      <div className="btn-play">
                        <a href="player.html"><button type="button" className="btn btn-danger"><i className="fa-sharp fa-solid fa-play"></i></button></a>
                      </div>
                      <div className="btn-info">
                        <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#movie5Modal"><i className="fa-solid fa-circle-info"></i></button>
                      </div>
                    </div>
                  </div>
                </div>           
              </div>
    </section>
    )
}

export default Card