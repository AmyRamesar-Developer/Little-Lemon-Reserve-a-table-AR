import React from "react";

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
        <header>
            <img src="./Logo.svg" alt="Little Lemon Logo" required></img>
            <nav classname="navbar">
            <ul>
                {navigation.map((nav) =>(
                    <li>
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