import React from "react";
import Special from "./Special";
import './App.css';

const specials = [
    {
        dishName: "Grilled Fish",
        dishPrice: "$20.00",
        dishDescription: "Our grilled fish is perfectly seasoned and char-grilled to perfection, served with a light drizzle of lemon and olive oil. Accompanied by a side of fresh herbs and a hint of garlic for an unforgettable flavor.",
        dishImage: "An image src for the dish"
    },

    {
        dishName: "Bruschetta",
        dishPrice: "$7.99",
        dishDescription: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with chopped tomatoes, oregano and fresh bazil.",
        dishImage: "An image src for the dish"
    },
    {
        dishName: "Greek Salad",
        dishPrice: "$12.99",
        dishDescription: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        dishImage: "An image src for the dish"
    }
]

const SpecialSection = () => {

    return (
        <section className="specials-section">
            <h2>Specials</h2>
            {specials.map((special) => (
                <Special
                    title={special.dishName}
                    cost={special.dishPrice}
                    description={special.dishDescription}
                    img={special.dishImage}
                    />
            ))}
        </section>
    );
}

export default SpecialSection;