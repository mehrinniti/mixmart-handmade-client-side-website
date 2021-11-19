import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Register = () => {
    const { registerUser, isLoading, user, authError } = useAuth();
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('your password did not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    };
    return (
        <Box>
            <Header></Header>
            <Container>
                <Grid container spacing={2}>
                    <Grid sx={{ my: 8 }} item xs={12} md={12}>
                        <Typography variant="h5" gutterBottom>Please Register</Typography>
                        {!isLoading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ mb: 1, width: '75%' }}
                                id="standard-basic"
                                label="Your Name"
                                type="name"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ mb: 1, width: '75%' }}
                                id="standard-basic"
                                label="Your Email"
                                type="email"
                                name="email"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ mb: 1, width: '75%' }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ mb: 1, width: '75%' }}
                                id="standard-basic"
                                label="Retype-Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <br />
                            <Button style={{ backgroundColor: "#e2aaa1" }} variant="contained" type="submit">Register</Button>
                        </form>}
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Are You Login successfully !</Alert>}
                        {authError && <Alert severity="error">Try Again Please Register Email Or Password Write Correctly !!</Alert>}
                        <br />
                        <NavLink style={{ textDecoration: 'none' }} to="/login">
                            <Button variant="text">Already User ? Please Login</Button>
                        </NavLink>
                    </Grid>
                </Grid>
            </Container >
            <Footer></Footer>
        </Box>
    );
};

export default Register;