import React from "react";
import {NavLink} from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top custom-navbar">
        <ul className="nav-links">
          <li>
            <NavLink 
            to= "/movies"
            className="nav-link" 
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink 
            to= "/about"
            className="nav-link" 
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
            to= "/addmovie"
            className="nav-link" 
            >
            Add a movie!
            </NavLink>
          </li>
        </ul>
      </nav>   
    );
}

export default NavBar;