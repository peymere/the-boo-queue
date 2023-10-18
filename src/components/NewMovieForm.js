import React, {useState} from "react";
// import NavBar from "./NavBar";

function NewMovieForm() {
    return (
    <div className="new-movie-form">
        {/* <header><NavBar/> </header> */}
        <h4>Add your own: </h4>
        <form>
            <div>
                <label>Title:</label>
                <input type="text" name="title"/>
            </div>
            <div>
                <label> Poster: </label>
                <input type="text" name="poster" placeholder="Poster URL" />
            </div>
            <div>
                <label> Runtime: </label>
                <input type="text" name="runtime" placeholder="Run time in minutes" />
            </div>
            <div>
                <label>Genre:</label>
                <select id="dropdown1" >
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
                <select id="dropdown2" >
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