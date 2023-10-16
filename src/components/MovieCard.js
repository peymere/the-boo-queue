import React from "react";

function MovieCard({movies}) {
    return (
        <li className="card">
            <img src={movies.image} alt={movies.name} />
        </li>
    );
}
export default MovieCard;