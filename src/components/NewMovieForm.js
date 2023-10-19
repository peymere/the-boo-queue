import React, {useState} from "react";
// import NavBar from "./NavBar";
import { useOutletContext } from "react-router";

function NewMovieForm() {
    const {addMovie, dataUrl} = useOutletContext();
    const [newMovieTitle, setNewMovieTitle] = useState('')
    const [newMoviePosterUrl, setNewMoviePosterUrl] = useState('')
    const [newMovieRuntime, setNewMovieRuntime] = useState(0)
    const [newMovieGenre, setNewMovieGenre] = useState('')
    const [newMovieAgeRating, setNewMovieAgeRating] = useState('')
    const [newMovieReleaseYear, setMovieNewReleaseYear] = useState(0)
    
    console.log(dataUrl)

    const newMovieData = {
        title: newMovieTitle,
        posterUrl : newMoviePosterUrl,
        runtime: newMovieRuntime,
        genre: newMovieGenre,
        ['age-rating']: newMovieAgeRating,
        watchlist: false,
        ['star-rating']: "",
        ['release-year']: newMovieReleaseYear
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted")
        console.log(dataUrl)
        fetch(dataUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify(newMovieData)
        })
            .then((r) => r.json())
            .then((newMovie) => addMovie(newMovie))
            .catch((error) => console.error('POST error', error))
        e.target.reset()
    }

    
    return (
    <div className="new-movie-form">
        {/* <header><NavBar/> </header> */}
        <h4>🧛🎃🦇👻Add your own💀🎃🧟🕷️</h4>
        <form id="new-movie-form" onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" name="title" required onChange={(e) => setNewMovieTitle(e.target.value)}/>
            </div>
            <div>
                <label>Release Date:</label>
                <input type="number" name="release-year" placeholder="" required onChange={(e) => setMovieNewReleaseYear(e.target.value)}></input>
            </div>
            <div>
                <label> Poster: </label>
                <input type="text" name="poster" placeholder="Poster URL" required onChange={(e) => setNewMoviePosterUrl(e.target.value)}/>
            </div>
            <div>
                <label> Runtime: </label>
                <input type="number" name="runtime" placeholder="Runtime in minutes" required onChange={(e) => setNewMovieRuntime(e.target.value)}/>
            </div>
            <div>
                <label>Genre:</label>
                <select id="dropdown1" required onChange={(e) => setNewMovieGenre(e.target.value)}>
                    <option value=""></option>
                    <option value="family">Family</option>
                    <option value="classic">Classic</option>
                    <option value="slasher">Slasher</option>
                    <option value="zombie">Zombie</option>
                    <option value="comedy">Comedy</option>
                    <option value="psychological">Psychological</option>
                    <option value="cult classics">Cult Classics</option>
                    <option value="gore">Gore</option>
                    <option value="paranormal">Paranormal</option>
                    <option value="body horror">Body Horror</option>
                </select>
            </div>
            <div>
                <label> Rating: </label>
                <select id="dropdown2" required onChange={(e) => setNewMovieAgeRating(e.target.value)}>
                    <option value=""></option>
                    <option value="G">G</option>
                    <option value="PG">PG</option>
                    <option value="PG-13">PG-13</option>
                    <option value="R">R</option>
                    <option value="Unrated">Unrated</option>
                </select>
            </div>
            <button type="submit"> Add movie </button>
        </form>
    </div> 
    );
}

export default NewMovieForm;