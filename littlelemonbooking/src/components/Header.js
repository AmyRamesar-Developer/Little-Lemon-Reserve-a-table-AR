import React from "react";
import { Link } from "react-router-dom"
import '../App.css'

const navigation = [
    {
        page: "HOME",
        url: "/"
    },
    {
        page: "ABOUT",
        url: "/"
    },
    {
        page: "MENU",
        url: "/underconstruction"
    },
    {
        page: "RESERVATIONS",
        url: "/bookingpage"
    },
    {
        page: "ORDER ONLINE",
        url: "/underconstruction"
    },
    {
        page: "LOGIN",
        url: "/underconstruction"
    },

]

const Header = () => {

    return (
        <header className="header-item">
            <img src="./Logo.svg" alt="Little Lemon Logo" required></img>
            <nav classname="nav-bar">
            <ul className="nav-list">
                {navigation.map((nav) =>(
                    <li className="nav-listitem">
                        <Link to={nav.url}>{nav.page}</Link>
                    </li>
                ))
                }
            </ul>
        </nav>
        </header>
    )
}

export default Header;