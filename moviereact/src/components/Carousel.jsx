function Carousel() {
    return (
        <div id="carouselExampleCaptions" className="carousel carousel-hero slide" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/horizontal poster/money heist1.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <div className="btn-play">
                <a href="player.html" id="buttonAlert1"><button type="button" className="btn btn-danger"><i className="fa-sharp fa-solid fa-play"></i></button></a>
              </div>
              <div className="carousel-ket">
                <h3>Money Heist</h3>
                <button className="btn btn-warning rounded-5" id="myButton">more</button>
                <p id="addElementMoneyHeist"></p>
              </div> 
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/horizontal poster/keanu_reeves_as_john_wick_donnie_yen_as_caine_bill_skarsgard_marquis_laurence_fishburne_bowery_king_hiroyuki_sanada_shimazu_hd_john_wick_chapter_4.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <div className="btn-play">
                <a href="player.html" id="buttonAlert2"><button type="button" className="btn btn-danger"><i className="fa-sharp fa-solid fa-play"></i></button></a>
              </div>
              <div className="carousel-ket">
                <h3>John Wick: Chapter 4</h3>
                <p>John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.</p>
              </div> 
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/horizontal poster/helen_mirren_as_hespera_zachary_levi_as_shazam_lucy_liu_as_kalypso_grace_caroline_currey_as_mary_bromfield_meagan_good_as_super_hero_darla_hd_shazam_fury_of_the_gods.jpg"className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <div className="btn-play" >
                <a href="player.html" id="buttonAlert3"><button type="button" className="btn btn-danger"><i className="fa-sharp fa-solid fa-play"></i></button></a>
              </div>
              <div className="carousel-ket">
                <h3>Shazam! Fury of the Gods</h3>
                <p>The film continues the story of teenage Billy Batson who, upon reciting the magic word "SHAZAM!" is transformed into his adult Super Hero alter ego, Shazam.</p>
              </div> 
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
  }
  export default Carousel