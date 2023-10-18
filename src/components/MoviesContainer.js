import React from "react";
import MovieCard from "./MovieCard"

function MoviesContainer({movies}) {
    // const movieCards = movies.map((movie)=> (
    //     <MovieCard key={movie.id} movies={movie}/>
    // ))
    return (
        <div className="container">
            <div className="row">
                    {movies.map(movie => {
                        return(
                            <MovieCard key={movie.id} title={movie.title} posterUrl={movie.posterUrl} runtime={movie.runtime} genre={movie.genre} ageRating={movie['age-rating']} watchlist={movie.watchlist} starRating={movie['star-rating']} releaseYear={movie['release-year']} />
                        )
                    })} 
            </div>
        </div>
    );
}

export default MoviesContainer;