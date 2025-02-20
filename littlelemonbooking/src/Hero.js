import React from "react";
import {Link} from "react-router-dom"
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
                <Link to="/bookingpage">
                <button>Book a table</button>
                </Link>
            </article>
            <img src="./images/chefb.jpg" alt="A chef preparing a meal" width="200px" height="250px"></img>
        </section>
    )
}

export default Hero;