import React from "react";
import './App.css';

const Testimonal = ({rating, name, img, comment}) => {

    return(
        <article className="testimonal-card">
            <h3 className="rating">{rating} stars</h3>
            <img src={img} alt="User" className="reviewerImg"></img>
            <h3 className="reviewer">{name}</h3>
            <p className="review">{comment}</p>
        </article>
    )
}

export default Testimonal;