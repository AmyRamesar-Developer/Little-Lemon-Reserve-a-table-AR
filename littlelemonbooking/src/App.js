import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import React from "react"
import Homepage from "./Homepage"
import BookingPage from "./BookingPage"
import './App.css'

function App() {
  return (
      <Router>
        <Routes>
          <Route path= "/" exact element={<Homepage />} />
          <Route path= "/bookingpage" element={<BookingPage />} />
        </Routes>
      </Router>
  );
}

export default App;
