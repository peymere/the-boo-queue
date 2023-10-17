import React from "react";
import MovieCard from "./MovieCard"

function MoviesContainer() {
    // const movieCards = movies.map((movie)=> (
    //     <MovieCard key={movie.id} movies={movie}/>
    // ))
    return (
        <ul className="cards"> <MovieCard /> </ul>
    );
}

export default MoviesContainer;