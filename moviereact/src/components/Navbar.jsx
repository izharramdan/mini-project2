function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          GO<span>{">"}</span>
        </a>
        <button
          className="navbar-toggler m-4"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="index.html">
                home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="categories.html">
                categories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="mylist.html">
                my list
              </a>
            </li>
          </ul>
          <div className="right-content">
            <div className="nav-search">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="search"
                  aria-label="Search"
                />
              </form>
            </div>
            <div className="btn-signin">
              <button
                className="btn btn-danger"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#signInModal"
              >
                sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
