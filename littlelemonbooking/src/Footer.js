import React from "react";

const Footer = () => {
    return (
        <section className="footer-item">
           <article>
                <img src='./images/logo.png' alt="Little Lemon Logo" />
           </article>
           <article>
                <h2>Little Lemon</h2>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order online</li>
                        <li>Login</li>
                    </ul>
                </nav>
           </article>
           <article>
           <h2>Contact Us</h2>
                <nav>
                    <ul>
                        <li>Phone Number</li>
                        <li>Email</li>
                        <li>Address</li>
                    </ul>
                </nav>
           </article>
           <article>
           <h2>Social Media</h2>
                <nav>
                    <ul>
                        <li>Meta</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </nav>
           </article>
        </section>
    )
}

export default Footer;