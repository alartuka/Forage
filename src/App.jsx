import React  from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/pages/Home";
import Navbar from "./components/pages/Navbar";
import About from "./components/pages/About";
import Signin from "./components/pages/Signin";

function App() {
  return (
    <div className="App">
        <h1> TechNova Shelter</h1>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Signin" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
