import React from "react";
import {useOutletContext} from "react-router"
// import NavBar from "./NavBar";

function Watchlist() {
    return (
        <div className="watchlist">
            <h1>Your Watchlist</h1>

        </div>
    );
}

export default Watchlist; 

// props/context needed: watchlistMovies, onRemoveFromWatchlist
// 
// watchlistMovies.map((movie) => (
//     <div>
//        <h4>{title}({releaseYear})</h4>
//         <img src={posterUrl} alt={title} loading="lazy" onClick={handleClick}/>
//         <div className="card-body">
//             <p className="card-text"> Runtime: {runtime} minutes</p>
//             <p className="card-text"> Film Rating: {ageRating} </p>
//         </div>
//         <button onClick={() => onRemoveFromWatchlist(movie)}>Remove</button> 
//     </div>
// ))
// 
