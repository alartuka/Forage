import React from 'react'
import '../style/Signin.css';
import TextField from '@mui/material/TextField';
import { Button, Grid, Box, Card, Container, Typography, CardActionArea } from '@mui/material';

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
                                '& .MuiTextField-root': { m: 3.5, width: '43ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >

                            <div>
                                <Grid>
                                    <TextField
                                        required
                                        id="outlined-username"
                                        label="Username"
                                    />
                                </Grid>

                                <Grid>
                                    <TextField
                                        required
                                        id="outlined-password-input"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"

                                    />
                                </Grid>

                                <Container className='add_button'>
                                    <Button size="large" color="secondary" variant="outlined" href="#sign-in">
                                        Sign in
                                    </Button>
                                </Container>
                            </div>
                        </Box>
                    </CardActionArea>
                </Card>
            </Container>
        </section>
    )
}

export default Signin