import React from "react";
import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";

const BookingForm = () => {
    return (
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            numberOfGuests: "",
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
            <Form>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field
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
                    <label htmlFor="email">Email</label>
                    <Field
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
