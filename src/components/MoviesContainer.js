import React, {useState} from "react";
import MovieCard from "./MovieCard"
import Sort from "./Sort";
import Filter from "./Filter"
import { useOutletContext } from "react-router";


function MoviesContainer() {
    const {movies, loading}= useOutletContext();
    const [sortOrder, setSortOrder] = useState('default')
    const [filters, setFilters] = useState({
        genre: '',
        ageRating: ''
    })
    const [visibleMovies, setVisibleMovies] = useState(8)
    
    const filteredMovies = movies.filter((movie) => {
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

    const loadMore = () => {
        setVisibleMovies(visibleMovies + 8)
    }

    return (
        <div className="container">
            <div className="sort-filter-container">
                <div className="sameRow">
                    <Sort setSortOrder={setSortOrder} />
                </div>
                <div className="sameRow">
                    <Filter filters={filters} setFilters={setFilters} />
                </div>
            </div>
            <div className="movie-container">
            {loading ? ( <h2>Loading Movies...</h2> ) : (
                    sortedMovies.slice(0, visibleMovies).map(movie => (
                            <MovieCard key={movie.id} title={movie.title} posterUrl={movie.posterUrl} runtime={movie.runtime} genre={movie.genre} ageRating={movie['age-rating']} watchlist={movie.watchlist} starRating={movie['star-rating']} releaseYear={movie['release-year']} /> )
                    ))}   
            </div>
            <div className="button-container">
                <button className="load-more" onClick={loadMore}>Load More</button>
            </div>
        </div>
    );
}

export default MoviesContainer;