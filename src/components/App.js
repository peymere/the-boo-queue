// import "src/App.css"
import React, {useState, useEffect} from "react";
import Header from "./Header"
import MoviesContainer from "./MoviesContainer";
import NewMovieForm from "./NewMovieForm";
import Watchlist from "./Watchlist";

function App() {
    const [moviesData, setMoviesData] = useState([]);
    const [loading, setLoading] = useState(true)

    const dataUrl = "https://halloween-movie-data.onrender.com/movies/"

    useEffect(() => {
        setLoading(true)
        fetch(dataUrl)
            .then((r) => r.json())
            .then(movieData => {
                
                const movies = movieData
                const shuffledMovies = shuffleArray(movies)
                
                setMoviesData(shuffledMovies)
                setLoading(false)
            })
            .catch(error => {console.error("Fetch Error: ", error);})
            setLoading(false)
    }, [])
    const shuffleArray = (array) => {
        let shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }

    const addMovie = (movie) => {
        setMoviesData([...moviesData, movie])
    }
    // console.log(dataUrl)
    return (
        <div>
            {loading ? ( <h2>Loading...</h2> ) : 
            (
                <div className="app">
                    <Header />
                    <MoviesContainer movies={moviesData} loading={loading}/>
                    <NewMovieForm addMovie={addMovie} dataUrl={dataUrl} />
                    <Watchlist />
                </div>
            )}
            
        </div>
    );
}

export default App; 
