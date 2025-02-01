import React from "react";
import './App.css'

const navigation = [
    {
        page: "HOME",
        url: "#home"
    },
    {
        page: "ABOUT",
        url: "about"
    },
    {
        page: "MENU",
        url: "#menu"
    },
    {
        page: "RESERVATIONS",
        url: "#reservations"
    },
    {
        page: "ORDER ONLINE",
        url: "#orderOnline"
    },
    {
        page: "LOGIN",
        url: "login"
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
                        <a href={nav.url}>{nav.page}</a>
                    </li>
                ))
                }
            </ul>
        </nav>
        </header>
    )
}

export default Header;