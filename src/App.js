import React from "react";
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  // Navbar component
  let darkColor = '#0b2434ff';
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
      document.title = "TextUtils - light mode";
      setInterval(() => {
        document.title = "TextUtils - Its amazing";
      }, 1000); // To call something every interval
      setInterval(() => {
        document.title = "TextUtils - Thanks for visit";
      }, 1500);
    } else {
      setMode('dark');
      document.body.style.backgroundColor = darkColor;
      showAlert("Dark mode enabled", "success");
      document.title = "TextUtils - dark mode";
    }
  }

  // Alert component
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const [color, setColor] = useState(null);
  const toggleColor = (event) => {
    setColor(event.target.value);
  }

  if (color) {
    document.body.style.backgroundColor = color;
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} toggleColor={toggleColor} />
        <Routes>
          <Route exact path="/" element={
            <div className="container my-3">
              <div className="container my-3">
                <Alert alertText={alert} />
              </div>
              <TextForm heading="Enter the text to analyse" mode={mode} darkColor={color ? color : darkColor} showAlert={showAlert} />
            </div>
          } />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router >
    </ >
  );
}

export default App;
