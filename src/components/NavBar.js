import React from "react";
import {NavLink} from "react-router-dom"

function NavBar() {
  function navigate(e) {
    e.preventDefault();
    window.history.pushState(null,"", e.target.href);
  }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning fixed-top">
        {/* <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <h1>Halloween Movie App</h1>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/movies" onClick={navigate}>Movies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/watchlist" onClick={navigate}>Watchlist</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/addmovie" onClick={navigate}>Add Your Own!</a>
              </li>
            </ul>
          </div>
        </div> */}
        <NavLink 
        to= "/movies"
        className="nav-link" 
        >
          Movies
        </NavLink>
        <NavLink 
        to= "/watchlist"
        className="nav-link" 
        >
           Watchlist
        </NavLink>
        <NavLink 
        to= "/addmovie"
        className="nav-link" 
        >
          Add a movie!
        </NavLink>
      </nav>   
    );
}

export default NavBar;