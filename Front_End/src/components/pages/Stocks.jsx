import { Container, Typography, Grid, Box, Button, Card, CardMedia } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import "../style/Stocks.css";
import data from "../assets/stocks_data";

function Stocks() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <section id="stocks">
            <Container className='stocks_section'>
                <Box >

                    <Grid>
                        <Container className='stock_buttons'>
                            <Grid container spacing={3}>
                                <Grid item>
                                    <Button className='bttn'
                                        size="medium" variant="contained" >
                                        Add
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button className='bttn'
                                        size="medium" variant="contained" >
                                        Delete
                                    </Button>
                                </Grid>
                            </Grid>
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
                    </Grid>

                    <Grid cointainer className="stocks_container">

                        <Grid>
                            <div className='add_stock'>
                                <Typography variant="h3">ADD STOCKS</Typography>
                                <Container className='add_form'>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': { m: 1.2, width: '25ch' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <Container className='add_container'>
                                            <Grid>
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="Product Name"
                                                />
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="Product Category"
                                                />
                                            </Grid>
                                            <Grid>
                                                <TextField
                                                    required
                                                    id="outlined-number"
                                                    label="Product Count"
                                                    type="number"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                            </Grid>
                                        </Container>
                                    </Box>
                                </Container>
                                <Button className='bttn' size="large" variant="contained" href="#add-stock">
                                    Submit
                                </Button>
                            </div>
                        </Grid>


                        <Grid >
                            <div className='upload_stock'>
                                <Typography variant="h3">
                                    UPLOAD STOCK
                                </Typography>
                                <Container className='upload_section'>
                                    <Container className='upload_container'>
                                        <Typography variant='h6'>
                                            Upload stock image
                                        </Typography>
                                        <img className='preview_img' src={file} />
                                    </Container>
                                    <Button className='bttn' size="large" variant="contained" component="label">
                                        Upload
                                        <input hidden accept="image/*" multiple type="file"
                                            onChange={handleChange} />
                                    </Button>
                                </Container>
                            </div>
                        </Grid>

                    </Grid>

                </Box>
            </Container>
        </section>
    )
}

export default Stocks