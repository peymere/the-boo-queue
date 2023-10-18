// import "src/App.css"
import React, {useState, useEffect} from "react";
import Header from "./Header"
import MoviesContainer from "./MoviesContainer";
import NewMovieForm from "./NewMovieForm";

function App() {
    const [moviesData, setMoviesData] = useState([]);

    const dataUrl = "https://halloween-movie-data.onrender.com/movies"

    useEffect(() => {
        fetch(dataUrl)
            .then((r) => r.json())
            .then(movieData => {
                
                const movies = movieData
                const shuffledMovies = shuffleArray(movies)
                
                setMoviesData(shuffledMovies)
            })
            .catch(error => {console.error("Fetch Error: ", error);})
    }, [])
    const shuffleArray = (array) => {
        let shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }
    return (
        <div className="app">
            <Header />
            <MoviesContainer movies={moviesData}/>
            <NewMovieForm />
        </div>
    );
}

export default App; 