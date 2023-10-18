import React, {useState} from "react";
import MovieCard from "./MovieCard"
import Sort from "./Sort";
import Filter from "./Filter"

function MoviesContainer({movies}) {
    const [sortOrder, setSortOrder] = useState('default')
    const [filters, setFilters] = useState({
        genre: '',
        ageRating: ''
    })
    
    const filteredMovies = movies.filter((movie) => {
        console.log(movie['age-rating'])
        if (filters.genre && !movie.genre.includes(filters.genre) ) {
            return false
        }
        if (filters.ageRating && movie['age-rating'] !== filters.ageRating ) {
            return false
        }
        return true
    })

    const sortedMovies = [...filteredMovies]


    if (sortOrder === 'oldToNew') {
        sortedMovies.sort((a, b) => a['release-year'] - b['release-year'])
    } else if (sortOrder === 'newToOld') {
        sortedMovies.sort((a, b) => b['release-year'] - a['release-year']) 
    } else if (sortOrder === 'longToShort') {
        sortedMovies.sort((a, b) => b.runtime - a.runtime)
        } else if (sortOrder === 'shortToLong') {
        sortedMovies.sort((a, b) => a.runtime - b.runtime)
    }

    console.log('filters:', filters);
    console.log('sortedMovies:', sortedMovies);
    console.log('filteredMovies:', filteredMovies);
    
    return (
        <div className="container">
            <Sort setSortOrder={setSortOrder} />
            <Filter filters={filters} setFilters={setFilters} />
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