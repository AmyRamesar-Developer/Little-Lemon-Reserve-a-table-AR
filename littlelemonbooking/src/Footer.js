import React from "react";
import {Link} from "react-router-dom"
import './App.css'

const navigation = [{page: "Home", url: "/"}, {page:"About", url: "/"}, {page: "Menu", url: "/"}, {page: "Reservations", url: "/bookingpage"}, {page: "Order online", url: "/"}, {page: "Login", url: "/"}];
const contacts = [{page: "Phone Number", url: "/"}, {page: "Email", url: "/"}, {page: "Address", url: "/"}];
const socials = [{page: "Meta", url: "/"}, {page: "Instagram", url: "/"}, {page: "X", url: "/"}];

const Footer = () => {
    return (
        <section className="footer-item">
           <article>
                <img src='./images/logo.png' alt="Little Lemon Logo" />
           </article>
           <article>
                <h2>Little Lemon</h2>
                <nav>
                    <ul className="nav-list">
                        {navigation.map((nav) =>(
                            <li className="nav-listitem">
                               <Link to={nav.url}>{nav.page}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
           </article>
           <article>
           <h2>Contact Us</h2>
                <nav>
                    <ul className= "nav-list">
                        {contacts.map((nav) =>(
                            <li className="nav-listitem">
                               <Link to={nav.url}>{nav.page}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
           </article>
           <article>
           <h2>Social Media</h2>
                <nav>
                    <ul className= "nav-list">
                        {socials.map((nav) =>(
                            <li className= "nav-listitem">
                               <Link to={nav.url}>{nav.page}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
           </article>
        </section>
    )
}

export default Footer;