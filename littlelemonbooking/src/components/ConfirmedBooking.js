import React from "react";
import {Link} from "react-router-dom"
import { FaCheckCircle } from 'react-icons/fa';
import "../App.css"

const ConfirmedBooking = () => {
    return (
        <main className="grid-container">
            <section className="confirmed">
                <FaCheckCircle className="fa-icon"/>
                <h1>Your reservation was successful</h1>
                <p>We look forward to having you!</p>
                <Link to="/">
                    <button className="conB">Return to Home</button>
                </Link>
            </section>
        </main>
    )
};

export default ConfirmedBooking;