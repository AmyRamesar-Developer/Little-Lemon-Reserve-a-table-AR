import React from "react"
import Testimonal from "./Testimonal"
import './App.css'

const testimonals = [
    {
        rating: 3,
        img: "to be added",
        name: "John Doe",
        comment: "Food was ass",
    },

    {
        rating: 5,
        img: "to be added",
        name: "Johnan Doe",
        comment: "Food was actually not bad",
    }
]

const Testimonals = () => {

    return (
        <section className="testimonals">
            <h2>Testimonals</h2>
            {testimonals.map((testimony) => (
                <Testimonal
                    rating={testimony.rating}
                    name={testimony.name}
                    img={testimony.img}
                    comment={testimony.comment}
                    />
            ))};
        </section>
    )
}

export default Testimonals;