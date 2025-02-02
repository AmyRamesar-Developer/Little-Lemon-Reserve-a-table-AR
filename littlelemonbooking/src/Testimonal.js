import React from "react";
import './App.css';

const Testimonal = ({rating, name, img, comment}) => {

    return(
        <article>
            <h3>{rating}</h3>
            <img src={img}></img>
            <h3>{name}</h3>
            <p>{comment}</p>
        </article>
    )
}

export default Testimonal;