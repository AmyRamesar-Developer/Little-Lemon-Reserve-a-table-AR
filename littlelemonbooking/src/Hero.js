import React from "react";

const Hero = () => {
    const title= "Little Lemon";
    const subTitle="Chicago";
    const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum egestas dolor hsyu iu.";

    return (
        <section>
            <article>
                <h1>{title}</h1>
                <h2>{subTitle}</h2>
                <p>{paragraph}</p>
                <img src="../chefb.jpg" alt="A chef preparing a meal" width="50px" height="50px"></img>
            </article>
        </section>
    )
}

export default Hero;