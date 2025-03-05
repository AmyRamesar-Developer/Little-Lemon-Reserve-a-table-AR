import React from "react";
import '../App.css';

const Special = ({title, cost, description, img}) => {

    return(
            <article className="special-card">
                <img src={img} alt={title}/>
                <h3 className="title">{title}</h3>
                <h3 className="cost">{cost}</h3>
                <p>{description}</p>
            </article>
    )
}

export default Special;