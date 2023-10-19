import React, {useState} from "react";


function MovieCard({title, posterUrl, runtime, genre, ageRating, watchlist, starRating, releaseYear}) {
    const [isOnWatchlist, setIsOnWatchlist] = useState(false)

    const handleClick = () => {
        alert(isOnWatchlist)
        setIsOnWatchlist(!isOnWatchlist)
    }

    return (
        <div className= "col-md-3" >
            <div className="card">
                <h4 className="movie-title">{title}({releaseYear})</h4>
                <img src={posterUrl} alt={title} loading="lazy" onClick={handleClick}/>
                <div className="card-body">
                    <p className="card-text"> Runtime: {runtime} minutes</p>
                    <p className="card-text"> Film Rating: {ageRating} </p>
                </div>
            </div>
        </div>
    );
}
export default MovieCard;


// context needed: onAddToWatchlist
// onClick={() => onAddToWatchlist(movie)}