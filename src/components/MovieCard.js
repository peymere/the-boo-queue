import React from "react";


function MovieCard({title, posterUrl, runtime, genre, ageRating, watchlist, starRating, releaseYear}) {
    return (
        <div className="movie-card">
            <div className="poster-container">
                <img src={posterUrl} alt={title} loading="lazy" className="movie-img"/>
            </div>
            <div className="movie-info">
                <h4 className="movie-title">{title} ({releaseYear})</h4>
                <p className="card-text runtime-text"> Runtime: {runtime} minutes</p>
                <p className="card-text film-rating"> Film Rating: {ageRating} </p>
            </div>
        </div>
    );
}
export default MovieCard;


// context needed: onAddToWatchlist
// onClick={() => onAddToWatchlist(movie)}