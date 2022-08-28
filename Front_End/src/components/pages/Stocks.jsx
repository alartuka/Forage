import { Container, Typography, Grid, Box, Button } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import "../style/Stocks.css";

function Stocks() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <section id="stocks">
            <Container className='stocks_section'>

                <Container className='stocks_header'>
                    {/* PROFILE TAG HERE...??!
                    <br />
                    STOCKS NAV Bar HERE...??! */}
                </Container>

                {/* MUI GRID !!! */}
                <Box sx={{ flexGrow: 10 }}>
                    <Grid cointainer
                        alignItems="center"
                        className="stocks_container"
                    >
                        <Grid item xs={10} spacing={3}>
                            <div className='add_stock'>
                                <Typography variant="h3">
                                    ADD STOCKS
                                </Typography>
                                <Container className='add_form'>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Product Name"
                                            // defaultValue="Product Name"
                                        />
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Product Category"
                                            // defaultValue="Product Category"
                                        />
                                        <TextField
                                            required
                                            id="outlined-number"
                                            label="Product Count"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        {/* <form className='add_stock_form'>
                                    <label>PRODUCT NAME</label>
                                    <input type='text' />
                                    <br />
                                    <label>PRODUCT CATEGORY</label>
                                    <input type='text' />
                                    <label>PRODUCT COUNT</label>
                                    <input type="text" />
                                    </form> */}
                                    </Box>
                                </Container>


                                <Button className='add_button' size="medium" variant="contained" href="#add-stock">
                                    Confirm
                                </Button>

                            </div>
                        </Grid>


                        <Grid item xs={10} spacing={3}>
                            <div className='upload_stock'>
                                <Typography variant="h3">
                                    UPLOAD STOCK
                                </Typography>
                                <Container className='uplaod_img'>
                                    <input type="file" onChange={handleChange} />
                                    <img src={file} />
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