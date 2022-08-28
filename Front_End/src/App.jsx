import React  from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/pages/Home";
import Navbar from "./components/pages/Navbar";
import About from "./components/pages/About";
import Signin from "./components/pages/Signin";
import ScrollTop from "./ScrollTop";
import Stocks from "./components/pages/Stocks";

function App() {
  return (
    <div className="App">
      <Router>
      <ScrollTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Stocks" element={<Stocks />} />
          <Route path="/Signin" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
