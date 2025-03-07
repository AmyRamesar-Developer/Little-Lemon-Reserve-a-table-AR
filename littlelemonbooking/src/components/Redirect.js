import React from "react"
import {Link} from "react-router-dom"
import { FaHammer } from 'react-icons/fa';
import "../App.css"

const Redirect = () => {
    return(
        <main className="grid-container">
            <section className="redirect">
                <FaHammer className="fa-icon"/>
                <p>Looks like we're still working on the page you're trying to visit. Come back soon! In the meantime, check out our Reservations to book a table now, or you can go back to the homepage</p>
                <section className= "r-But">
                    <Link to="/bookingpage">
                        <button>Reservations</button>
                    </Link>
                    <Link to="/">
                        <button>Homepage</button>
                    </Link>
                </section>
            </section>
        </main>
    )
}

export default Redirect;