import React from "react"
import BookingForm from "./BookingForm";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css"

const BookingPage = () => {
    return (
        <main className="grid-container">
            <Header />
            <BookingForm />
            <Footer />
        </main>
    )
}

export default BookingPage;