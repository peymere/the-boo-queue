import React from "react";

function Sort({setSortOrder}) {

    return (
        <div>
            <h5>Sort by:</h5>
            <select onChange={(e) => setSortOrder(e.target.value)}>
                <option value='default'>Default</option>
                <option value='newToOld'>Release Date: Newest to Oldest</option>
                <option value='oldToNew'>Release Date: Oldest to Newest</option>
                <option value='longToShort'>Runtime: Longest to Shortest</option>
                <option value='shortToLong'>Runtime: Shortest to Longest</option>
            </select>
        </div>
    );
}

export default Sort;