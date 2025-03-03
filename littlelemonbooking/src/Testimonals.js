import React from "react"
import Testimonal from "./Testimonal"
import './App.css'

const testimonals = [
    {
        rating: 5,
        img: "./images/propic1.jpg",
        name: "Melissa",
        comment: "Such a gem! The desserts were fantastic. Can't wait to return!",
    },

    {
        rating: 5,
        img: "./images/propic2.jpg",
        name: "Dave McKhan",
        comment: "Amazing food! The kebabs were perfect, and the vibe was cozy.",
    },

    {
        rating: 4,
        img: "./images/propic3.jpeg",
        name: "John Tomith",
        comment: "Great food, especially the lamb!",
    },

    {
        rating: 3,
        img: "./images/propic4.jpeg",
        name: "Sarah Joann",
        comment: "Nice atmosphere and friendly staff, but I expected a bit more",
    }
]

const Testimonals = () => {

    return (
        <section className="testimonals">
            <h2>Testimonals</h2>
            <section className="reviews">
                {testimonals.map((testimony) => (
                    <Testimonal
                        rating={testimony.rating}
                        name={testimony.name}
                        img={testimony.img}
                        comment={testimony.comment}
                        />
                ))}
            </section>
        </section>
    )
}

export default Testimonals;