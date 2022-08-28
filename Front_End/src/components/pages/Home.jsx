import { Container, Typography } from '@mui/material';
import React from 'react';
import "../style/home.css";
import LOGO from "../assets/logo.jpg";
import { Diversity2Sharp } from '@mui/icons-material';

function Home() {
  return (
    <section id="home">
      <div className='home_header'>
        {/* <Typography variant="h2">
          Welcome to
        </Typography> */}
        <Container className='home_name'>
        {/* <Typography variant="h1">
          FORAGE
        </Typography> */}
        </Container>
        <img className='home_img' src={LOGO} />
      </div>
    </section>
  )
}

export default Home