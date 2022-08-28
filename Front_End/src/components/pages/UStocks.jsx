import { Button, Container, Typography } from '@mui/material';
import React from 'react'
import '../style/UStocks.css';
import data from "../assets/stocks_data";
import { Link, Navigate } from 'react-router-dom';

function UStocks() {
    return (
        <section id="u_stocks">
            <Container className='ustocks_header'>
                <Container className='signin_container'>
                    <Typography variant="body2">
                        *For staff only*
                    </Typography>
                    <Button size="large" color="secondary" variant="outlined">
                        <Link to="/Signin">Sign in</Link>
                    </Button>
                </Container>
                <Typography variant="h3">
                    ADD TITLE and DESCRIPTION OF PAGE !!
                </Typography>

            </Container>

            <Container className='ustocks_container'>
                <table>
                    <tr>
                        <th>Product Category</th>
                        <th>Product Name</th>
                        <th>Product Count</th>
                    </tr>

                    {data.map((val, id) => {
                        return (
                            <tr key={id}>
                                <td>{val.category}</td>
                                <td>{val.name}</td>
                                <td>{val.count}</td>

                            </tr>
                        )
                    })}
                </table>
            </Container>
        </section>
    );
}

export default UStocks;