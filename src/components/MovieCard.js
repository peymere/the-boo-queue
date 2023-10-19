import React, {useState} from "react";


function MovieCard({title, posterUrl, runtime, genre, ageRating, watchlist, starRating, releaseYear}) {

    return (
        
            <div className="movie-card">
                <h4 className="movie-title">{title}({releaseYear})</h4>
                <img src={posterUrl} alt={title} loading="lazy" className="movie-img"/>
                <div className="card-body">
                    <p className="card-text"> Runtime: {runtime} minutes</p>
                    <p className="card-text"> Film Rating: {ageRating} </p>
                </div>
            </div>
        
    );
}
export default MovieCard;


// context needed: onAddToWatchlist
// onClick={() => onAddToWatchlist(movie)}