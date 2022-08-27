import React from 'react';
import '../style/Navbar.css';

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='rightSide' >
            <Link to="/"> Home </Link>
            <Link to="/About"> About </Link>
            <Link to="/Stocks"> Stocks </Link>
            <Link to="/Signin"> Sign in</Link>
            
        </div>
    </div>
  )
}

export default Navbar