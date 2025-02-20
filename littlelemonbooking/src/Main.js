import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {React, useReducer} from "react"
import Homepage from "./Homepage"
import BookingPage from "./BookingPage"
import './App.css'


const initialState = {
    selectedDate: "",
    availableTimes: ['12:00pm', '12:30pm', '5:00pm', '5:30pm', '6:00pm', '6:30pm', '7:00pm', '7:30pm', "8:00pm", '8:30pm', '9:00pm',],
};

function bookingReducer (state, action) {
    if(action.type === 'setDate') return {...state, selecteDate: action.payload };
    if(action.type === 'setAvailableTimes') return {...state, availableTimes: action.payload };
    else return state;
}
const Main = () => {
    const [state, dispatch] = useReducer (bookingReducer, initialState);

    const updateTimes = (selectedDate) => {
      console.log(selectedDate);
        dispatch ({
            type: 'setAvailableTimes',
            payload: ['12:00pm', '5:00pm', "9:44pm"],
        });
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
                            />}
            />
          </Routes>
        </Router>
    );
  }



export default Main;