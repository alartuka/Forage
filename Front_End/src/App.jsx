import React from "react";
import { BrowserRouter as Router, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Home from "./components/pages/Home";
import Navbar from "./components/pages/Navbar";
import About from "./components/pages/About";
import Signin from "./components/pages/Signin";
import ScrollTop from "./ScrollTop";
import Stocks from "./components/pages/Stocks";
import UStocks from "./components/pages/UStocks";

function App() {
  // const PrivateWrapper = ({ auth: { isAuthenticated } }) => {
  //   return isAuthenticated ? <Outlet /> : <Navigate to="/Signin" />;
  // };
  
  const PrivateWrapper = ({ auth: { isAuthenticated } }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/Signin" />;
  };


  return (
    <div className="App">
      <Router>
        <ScrollTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Signin" element={<Signin />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/UStocks" element={<UStocks />} />
          {/* <Route element={<PrivateWrapper />}> */}
            <Route path="/Stocks" element={<Stocks />} />
          {/* </Route> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
