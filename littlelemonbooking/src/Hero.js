import React from "react";
import './App.css'

const Hero = () => {
    const title= "Little Lemon";
    const subTitle="Chicago";
    const paragraph = "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.";

    return (
        <section className="hero-item">
            <article>
                <h1>{title}</h1>
                <h2>{subTitle}</h2>
                <p>{paragraph}</p>
            </article>
            <img src="../chefb.jpg" alt="A chef preparing a meal" width="200px" height="250px"></img>
        </section>
    )
}

export default Hero;