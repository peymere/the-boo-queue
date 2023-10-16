import React from "react";
import MovieCard from "./MovieCard"

function MoviesContainer({movies}) {
    const movieCards = movies.map((movie)=> (
        <MovieCard key={movie.id} movies={movie}/>
    ))
    return (
        <ul className="cards">{movieCards} </ul>
    );
}

export default MoviesContainer;