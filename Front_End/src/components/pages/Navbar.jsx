import React from 'react';
import '../style/Navbar.css';
import LOGO from "../assets/small_logo.png";
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';

function Navbar() {
  return (
    <div className='navbar'>
      <Container className='leftSide' >
      <Link to="/"><img src={LOGO} alt='Logo' /></Link>
      </Container>
        <Container className='rightSide' >
            <Link to="/"> Home </Link>
            <Link to="/About"> About </Link>
            <Link to="/Stocks"> Stocks </Link>
            <Link to="/UStocks"> UStocks</Link>
            {/* <Link to="/Signin"> Sign in</Link> */}
            
        </Container>
    </div>
  )
}

export default Navbar