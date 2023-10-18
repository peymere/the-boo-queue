// import "src/App.css"
import React, {useState, useEffect} from "react";
import Header from "./Header"
import MoviesContainer from "./MoviesContainer";
import NewMovieForm from "./NewMovieForm";

function App() {
const [movies, setMovies] = useState([]);

    useEffect(()=>{
        fetch(URL)
        .then((r)=> r.json())
        .then(setMovies);
    }, [])
    return (
        <div className="app">
            <Header />
            <MoviesContainer movies={movies}/>
            <NewMovieForm/>
        </div>
    );
}

export default App; 
