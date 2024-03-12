import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Text from './components/Text';
import Alerts from './components/Alerts';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes, // replace Switch with Routes
  Route,
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }
  return (
    <>
      <Router>
        <Navigation />
        <Alerts alert={alert} />
        <div className="container my-2">
          <Routes>
            <Route excact path="/about" element={<About />} />
            <Route exact path="/" element={<Text showAlert={showAlert} heading="UpperCase Converter" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;