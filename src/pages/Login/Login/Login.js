import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import { CircularProgress } from '@material-ui/core';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, authError, isLoading, googleWithSignIn } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
    };

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    };

    const handleGoogleSignIn = () => {
        googleWithSignIn(location, history);
    }

    return (
        <Box>
            <Header></Header>
            <Container>
                <Grid container spacing={2}>
                    <Grid sx={{ my: 8 }} item xs={12} md={12}>
                        <Typography variant="h5" gutterBottom>Please Login</Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ mb: 1, width: '75%' }}
                                id="standard-basic"
                                label="Your Email"
                                type="email"
                                name="email"
                                onChange={handleOnChange}
                                variant="standard" />
                            <TextField
                                sx={{ mb: 1, width: '75%' }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                variant="standard" />
                            <br />
                            <Button style={{ backgroundColor: "#e2aaa1" }} variant="contained" type="submit">Login</Button>
                            <br />
                            <NavLink style={{ textDecoration: 'none' }} to="/register">
                                <Button variant="text">New User ? Please Register</Button>
                            </NavLink>
                        </form>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Are You Login successfully !</Alert>}
                        {authError && <Alert severity="error">Try Again Use Email Or Password Write Correctly !!</Alert>}
                        <div>---------------------------or-----------------------------</div>
                        <Button onClick={handleGoogleSignIn} style={{ backgroundColor: "#e2aaa1" }} variant="contained">Google Sign In</Button>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </Box>
    );
};

export default Login;