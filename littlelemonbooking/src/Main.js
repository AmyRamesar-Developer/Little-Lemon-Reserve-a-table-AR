import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {React, useReducer, useEffect} from "react"
import Homepage from "./components/Homepage"
import BookingPage from "./components/BookingPage"
import ConfirmedBooking from "./components/ConfirmedBooking"
import Redirect from "./components/Redirect.js"
import {fetchAPI, submitAPI} from "./BookingAPI.js"
import './App.css'

const initialState = {
  selectedDate: new Date(),
  availableTimes: [],
}

const initializeTimes = () => {
  const inititalDate = new Date();
  return {
    selectedDate: inititalDate,
    availableTimes: fetchAPI(inititalDate),
  };
}

function bookingReducer (state, action) {
    if(action.type === 'setSelectedDate') return {...state, selectedDate: action.payload };
    if(action.type === 'setAvailableTimes') return {...state, availableTimes: action.payload };
    else return state;
}
const Main = () => {
    const [state, dispatch] = useReducer (bookingReducer, initialState, initializeTimes);
    useEffect(() =>{
      const fetchInitialTimes = async () => {
        const today = new Date();
        const times = await fetchAPI(today);
        dispatch({
          type: "setAvailableTimes",
          payload: times || [],
        });
        dispatch({
          type: "setSelectedDate",
          payload: today,
        });
      };

      fetchInitialTimes();
    }, []);

    useEffect(() => {
      if (state.selectedDate) {
        const fetchTimesForSelectedDate = async () => {
          const times = await fetchAPI(state.selectedDate);
          dispatch({
            type: "setAvailableTimes",
            payload: times || [],
          });
        };
        fetchTimesForSelectedDate();
      }
    }, [state.selectedDate]);

    const updateTimes = async (selectedDate) => {
      dispatch({
        type: "setSelectedDate",
        payload: selectedDate,
      });
    };

    const submitForm = async (formState) => {
      const isSubmitted = await submitAPI(formState);
      return isSubmitted;
    };


    return (
        <Router>
          <Routes>
            <Route path= "/" exact element={<Homepage />} />
            <Route path= "/bookingpage"
                element= {<BookingPage
                            availableTimes={state.availableTimes}
                            updateTimes={updateTimes}
                            selecteDate={state.selectedDate}
                            dispatch={dispatch}
                            submitForm={submitForm}
                            />}
            />
            <Route path= "/confirmation" element = {<ConfirmedBooking />} />
            <Route path= "/underconstruction" element = {<Redirect />} />
          </Routes>
        </Router>
    );
  }



export default Main;