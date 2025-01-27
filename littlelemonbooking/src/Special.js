import React from "react";

const Special = ({title, cost, description, img}) => {

    return(
            <article>
                <img src="img" alt="${title} Image"/>
                <h3>{title}</h3>
                <h3>{cost}</h3>
                <p>{description}</p>
            </article>
    )
}

export default Special;