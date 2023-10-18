import React, {useState} from "react";
import { useOutletContext } from "react-router";

function MovieCard({movie, title, posterUrl, runtime, genre, ageRating, watchlist, starRating, releaseYear}) {
    const {onAddToWatchlist, dataUrl} = useOutletContext();
    const [isOnWatchlist, setIsOnWatchlist] = useState(false)

    // const handleClick = () => {
    //     // alert(isOnWatchlist)
    //     // setIsOnWatchlist(!isOnWatchlist)
    //     onAddToWatchlist(movie)
    //     console.log(movie.watchlist)
    // }

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


// context needed: onAddToWatchlist
// onClick={() => onAddToWatchlist(movie)}