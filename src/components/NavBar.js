import React from "react";
import {NavLink} from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top custom-navbar">
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