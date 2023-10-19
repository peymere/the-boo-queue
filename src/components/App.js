// import "src/App.css"
import React, {useState, useEffect} from "react";
import Header from "./Header"
import MoviesContainer from "./MoviesContainer";
import NewMovieForm from "./NewMovieForm";
import About from "./About";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

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
    const context= {
        movies: moviesData,
        addMovie,
        dataUrl,
        loading,
    }
    return (
        <div>
            <div className="app">
                <NavBar/>
                <div className="main-content">
                    <Header />
                    <Outlet context={context}/>
                </div>
            </div>
        </div>
    );
}

export default App; 
