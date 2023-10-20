import React from "react";

function Filter({filters, setFilters}) {
    
    return (
        <div>
            <select className="rating-selector selector" value={filters.ageRating} onChange={(e) => setFilters({ ...filters, ageRating: e.target.value})}>
                <option value=''>All Age Ratings</option>
                <option value='G'>Rated G</option>
                <option value='PG'>Rated PG</option>
                <option value='PG-13'>Rated PG-13</option>
                <option value='R'>Rated R</option>
                <option value='Unrated'>Unrated</option>
            </select>
            <select className="genre-selector selector" value={filters.genre} onChange={(e) => setFilters({ ...filters, genre: e.target.value})} >
                <option value=''>All Genres</option>
                <option value='classic'>Classics</option>
                <option value='family'>Family</option>
                <option value='comedy'>Comedy</option>
                <option value='cult classics'>Cult Classics</option>
                <option value='psychological'>Psychological</option>
                <option value='slasher'>Slasher</option>
                <option value='zombie'>Zombie</option>
                <option value='gore'>Gore</option>
                <option value='body horror'>Body Horror</option>
                <option value='paranormal'>Paranormal</option>
            </select>
        </div>
    );
}

export default Filter;