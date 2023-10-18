import React, {useState} from "react";
import MovieCard from "./MovieCard"
import Sort from "./Sort";

function MoviesContainer({movies}) {
    const sortedMovies = [...movies]
    const [sortOrder, setSortOrder] = useState('default')

    if (sortOrder === 'oldToNew') {
        sortedMovies.sort((a, b) => a['release-year'] - b['release-year'])
    } else if (sortOrder === 'newToOld') {
        sortedMovies.sort((a, b) => b['release-year'] - a['release-year']) 
    } else if (sortOrder === 'longToShort') {
        sortedMovies.sort((a, b) => b.runtime - a.runtime)
    } else if (sortOrder === 'shortToLong') {
        sortedMovies.sort((a, b) => a.runtime - b.runtime)
    }
    
    return (
        <div className="container">
            <Sort setSortOrder={setSortOrder} />
            <div className="row">
                    {sortedMovies.map(movie => {
                        return(
                            <MovieCard key={movie.id} title={movie.title} posterUrl={movie.posterUrl} runtime={movie.runtime} genre={movie.genre} ageRating={movie['age-rating']} watchlist={movie.watchlist} starRating={movie['star-rating']} releaseYear={movie['release-year']} />
                        )
                    })} 
            </div>
        </div>
    );
}

export default MoviesContainer;