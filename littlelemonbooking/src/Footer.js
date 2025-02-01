import React from "react";

const Footer = () => {
    return (
        <section className="footer-item">
           <article>
                <h2>Image Insert</h2>
           </article>
           <article>
                <h2>Doormat Navigation</h2>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>ABOUT</li>
                        <li>MENU</li>
                        <li>RESERVATIONS</li>
                        <li>ORDER ONLINE</li>
                        <li>LOGIN</li>
                    </ul>
                </nav>
           </article>
           <article>
           <h2>Contact</h2>
                <nav>
                    <ul>
                        <li>Phone Number</li>
                        <li>Email</li>
                        <li>address</li>
                    </ul>
                </nav>
           </article>
           <article>
           <h2>Social Media Links</h2>
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