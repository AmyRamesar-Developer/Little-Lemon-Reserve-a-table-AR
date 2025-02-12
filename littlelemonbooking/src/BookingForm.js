import {React, useState} from "react";
import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
import AvailableTimes from "./AvailableTimes";
import "./App.css"

const BookingForm = () => {

    const times = AvailableTimes();

    const [formState, setFormState] = useState({
      firstName: "",
            lastName: "",
            numberOfGuests: "",
            date: "",
            time: "",
            notes:"",
            contactNumber: "",
            email: "",
    });

    const handleFieldChange = (e, setFieldValue) => {
      const {name, value} = e.target;
      setFormState((prevState) => ({
        ...prevState,
        [name]:value,
      }));
      setFieldValue(name, e.target.value)
    };

    const handleSumbit = (values) => {
      console.log('Form submitte with values: ', values);
    }

    return (
        <Formik
          initialValues={formState}

          onSubmit={handleSumbit}

          validationSchema={ Yup.object({
            firstName: Yup.string().required("Please enter your first name").min(2, "First name should be at least 2 characters long"),
            lastName: Yup.string().required("Please enter your last name").min(2, "Last name should be at least 2 characters long"),
            numberOfGuests: Yup.number().required("Please enter number of guests").min(1, "One person minimum").max(12, "12 persons max"),
            email: Yup.string().email("Invalid email").required("Enter email"),
          })}
    >
        {({values, errors, touched, handleChange, setFieldValue}) => (
            <Form className="booking-form">
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formState.firstName}
                      onChange={(e) => handleFieldChange(e, setFieldValue)}
                      placeholder="First Name"
                      className="booking-input"
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
                      value={formState.lastName}
                      onChange={(e) => handleFieldChange(e, setFieldValue)}
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
                      value={formState.numberOfGuests}
                      onChange={(e) => handleFieldChange(e, setFieldValue)}
                      placeholder="Number of Guests"
                    />
                    <ErrorMessage name="numberOfGuests">
                        {(msg) => <div className="error">{msg}</div>}
                    </ErrorMessage>
                </div>
                <div>
                    <label htmlFor="date">Date </label>
                    <Field
                      className="booking-input"
                      id="date"
                      name="date"
                      type="date"
                      value={formState.date}
                      onChange={(e) => handleFieldChange(e, setFieldValue)}
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
                      value={formState.time}
                      onChange={(e) => handleFieldChange(e, setFieldValue)}
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
                      value={formState.occassion}
                      onChange={(e) => handleFieldChange(e, setFieldValue)}
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
                      value={formState.notes}
                      onChange={(e) => handleFieldChange(e, setFieldValue)}
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
                      value={formState.contactNumber}
                      onChange={(e) => handleFieldChange(e, setFieldValue)}
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
                      value={formState.email}
                      onChange={(e) => handleFieldChange(e, setFieldValue)}
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
