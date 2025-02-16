import React from "react"
import BookingForm from "./BookingForm";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css"

const BookingPage = ({availableTimes, selectedDate, updateTimes, dispatch}) => {
    const formHeading = "Reserve a table";
    const formGreeting =  "Please fill out the form below to reserve a table at the Little Lemon Restuarant in Chicago";

    return (
        <main className="grid-container">
            <Header />
            <h1 className="form-heading">{formHeading}</h1>
            <p className="form-greeting">{formGreeting}</p>
            <BookingForm
                availableTimes={availableTimes}
                updateTimes={updateTimes}
                selectedDate={selectedDate}
                dispatch={dispatch}
            />
            <Footer />
        </main>
    )
}

export default BookingPage;