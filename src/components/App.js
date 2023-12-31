// import "src/App.css"
import React, {useState, useEffect} from "react";
import Header from "./Header"
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";


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
/**
 * this shuffles the elements of an array passed into it
 * @param {*} array the array of movies
 * @returns a shuffled array of the original movie array
 */
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
        <div className="app-container">
            <div className="app">
                <NavBar/>
                <div className="main-content">
                    <Header />
                    <Outlet context={context}/>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App; 
