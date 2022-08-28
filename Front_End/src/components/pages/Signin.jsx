import React from 'react'
import '../style/Signin.css';
import TextField from '@mui/material/TextField';
import { Button, Box, Card, Container, Typography, CardActionArea } from '@mui/material';

function Signin() {
    return (
        <section id="sign_in">
            <Container className='signin_section'>
                <Typography variant="h1">
                    Sign in
                </Typography>

                <Card className='singin_form'>
                    <CardActionArea>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <TextField
                                    required
                                    className='text_field'
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"

                                />
                                <br />
                                <Button className='add_button' size="medium" color="primary" variant="outlined" href="#sign-in">
                                    Sign in
                                </Button>
                            </div>
                        </Box>
                    </CardActionArea>
                </Card>
            </Container>
        </section>
    )
}

export default Signin