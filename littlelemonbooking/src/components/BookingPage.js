import React from "react"
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import Header from "./Header";
import Footer from "./Footer";
import "../App.css"

const BookingPage = ({availableTimes, selectedDate, updateTimes, dispatch, submitForm}) => {
    const navigate = useNavigate();
    const formHeading = "Reserve a table";
    const formGreeting =  "Please fill out the form below to reserve a table at the Little Lemon Restuarant in Chicago";

    const handleSubmit = async (formState) => {
        const isSubmitted = await submitForm(formState);
        if (isSubmitted) {
          navigate("/confirmation");
        } };


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
                submitForm={submitForm}
                onSubmit={handleSubmit}
            />
            <Footer />
        </main>
    )
}

export default BookingPage;