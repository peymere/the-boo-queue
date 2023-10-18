import React from "react";


function MovieCard({title, posterUrl, runtime, genre, ageRating, watchlist, starRating, releaseYear}) {
    return (
        <div className= "col-md-3" >
            <div className="card">
                <h4>{title}({releaseYear})</h4>
                <img src={posterUrl} alt={title} loading="lazy" />
                <div className="card-body">
                    <p className="card-text"> Runtime: {runtime} minutes</p>
                    <p className="card-text"> Film Rating: {ageRating} </p>
                </div>
            </div>
        </div>
    );
}
export default MovieCard;