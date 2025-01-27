import React from "react";
import Special from "./Special"

const specials = [
    {
        dishName: "Greek Salad",
        dishPrice: "$12.99",
        dishDescription: "A paragraph of text describing the dish",
        dishImage: "An image src for the dish"
    }
]

const SpecialSection = () => {

    return (
        <section>
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