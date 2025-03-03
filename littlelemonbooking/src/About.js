import React from "react"

const About = () => {

    const aboutUs = "Welcome to Little Lemon Restaurant, a family-owned Mediterranean gem in the heart of Chicago. Co-owned by Mario and Adrian, we're passionate about bringing the rich flavors of the Mediterranean to your table, blending traditional recipes with a modern twist. Our menu celebrates fresh, locally-sourced ingredients, crafted with care and a love for good food. Whether you're here for a cozy meal or a special celebration, we promise a dining experience that feels like home.";
    return(
        <section className="about">
            <article>
                <h1>Meet the owners</h1>
                <p> {aboutUs}</p>
            </article>
            <img src="./images/owners.jpg" alt="Mario and Adrian, co-owners of Little Lemon" ></img>
        </section>
    )
}

export default About;