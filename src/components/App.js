// import "src/App.css"
import React from "react";
import Header from "./Header"

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
        </div>
    );
}

export default App; 
