function Footer() {
    return (
        <section className="footer">
    <h1 className="header row">contact us</h1>
    <footer className="footer-content row">
      <div className="contact col">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">name</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="enter your name" />
        </div>
        <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="enter your email" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">your messages</label>
            <textarea className="form-control txt-area" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="button" className="btn btn-danger">
            submit
          </button>
        </div>
        <div className="faq col">
          <div className="faq-content col">
            <a href="#">FAQ</a>
            <a href="#">About</a>
            <a href="#">Subscription</a>
          </div>
          <div className="faq-content col">
            <a href="#">Privacy</a>
            <a href="#">Term of Use</a>
            <a href="#">Legal Notices</a>
          </div>
          <div className="faq-logo">
            <h1>GO<span>{'>'}</span></h1>
            <p>copyright &copy 2023</p>
          </div>
        </div>
    </footer>
    <div className="social col mt-5 mb-5">
      <a href="https://www.instagram.com/izharamdan/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
      <a href="" target="_blank"><i className="fa-brands fa-twitter"></i></a>
      <a href="" target="_blank"><i className="fa-brands fa-tiktok"></i></a>
    </div>
  </section>
    )
}

export default Footer