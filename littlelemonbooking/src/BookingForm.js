import React from "react";
import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
import AvaiableTimes from "./AvailableTimes";
import "./App.css"

const BookingForm = () => {

    const times = AvaiableTimes();

    return (
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            numberOfGuests: "",
            date: "",
            time: "",
            contactNumber: "",
            email: "",
          }}

          onSubmit={(values) => {
            console.log("Form Data, values");
          }}

          validationSchema={ Yup.object({
            firstName: Yup.string().required("Please enter your first name").min(2, "First name should be at least 2 characters long"),
            lastName: Yup.string().required("Please enter your last name").min(2, "Last name should be at least 2 characters long"),
            numberOfGuests: Yup.number().required("Please enter number of guests").min(1, "One person minimum").max(12, "12 persons max"),
            email: Yup.string().email("Invalid email").required("Enter email"),
          })}
    >
        {({errors, touched}) => (
            <Form className="booking-form">
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field
                      className="booking-input"
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                    />
                    <ErrorMessage name="firstName">
                        {(msg) => <div className="error">{msg}</div>}
                    </ErrorMessage>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field
                      className="booking-input"
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                    />
                    <ErrorMessage name="lastName">
                        {(msg) => <div className="error">{msg}</div>}
                    </ErrorMessage>
                </div>
                <div>
                    <label htmlFor="numberOfGuests">Number of Guests</label>
                    <Field
                      className="booking-input"
                      id="numberOfGuests"
                      name="numberOfGuests"
                      type="number"
                      placeholder="Number of Guests"
                    />
                    <ErrorMessage name="Number of Guests">
                        {(msg) => <div className="error">{msg}</div>}
                    </ErrorMessage>
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <Field
                      className="booking-input"
                      id="date"
                      name="date"
                      type="date"
                      placeholder="Date"
                    />
                    <ErrorMessage name="date">
                        {(msg) => <div className="error">{msg}</div>}
                    </ErrorMessage>
                </div>
                <div>
                    <label htmlFor="time">Time</label>
                    <Field
                      className="booking-input"
                      as="select"
                      id="time"
                      name="time"
                    >
                    <option>Select a time</option>
                    {times.map((time) => (
                        <option>{time}</option>
                    ))}

                    </Field>
                    <ErrorMessage name="time">
                        {(msg) => <div className="error">{msg}</div>}
                    </ErrorMessage>
                </div>
                <div>
                    <label htmlFor="occassion">Occassion</label>
                    <Field
                      className="booking-input"
                      as="select"
                      id="occassion"
                      name="occassion"
                      placeholder="Select an option"
                    >
                    <option>Select an occassion</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>

                    </Field>
                    <ErrorMessage name="time">
                        {(msg) => <div className="error">{msg}</div>}
                    </ErrorMessage>
                </div>
                <div>
                    <label htmlFor="notes">Notes or special requests</label>
                    <Field
                      className="booking-input"
                      id="notes"
                      name="notes"
                      type="text"
                      placeholder=""
                    />
                </div>
                <div>
                    <label htmlFor="contactNumber">Contact Number</label>
                    <Field
                      className="booking-input"
                      id="contactNumber"
                      name="contactNumber"
                      type="number"
                      placeholder="Contact Number"
                    />
                    <ErrorMessage name="contactNumber">
                        {(msg) => <div className="error">{msg}</div>}
                    </ErrorMessage>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field
                      className="booking-input"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                    />
                    <ErrorMessage name="email">
                        {(msg) => <div className="error">{msg}</div>}
                    </ErrorMessage>
                </div>
                <button type="submit">Submit</button>
            </Form>
        )}
    </Formik>
    );
};

export default BookingForm;
