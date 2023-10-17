import React from "react";

function MovieCard() {
    return (
        <div className= "col-md-2" >
        <div className="card">
            <h4>{"Midsommar (1900)"}</h4>
            <img src={'https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/3/1-midsommar-fan-art-kathy-campbell.jpg'} alt={'Midsommar'}/>
            <div className="card-body">
                <p className="card-text"> Runtime: 122 minutes </p>
                <p className="card-text"> Film Rating: R </p>
            </div>
        </div>
        </div>
    );
}
export default MovieCard;