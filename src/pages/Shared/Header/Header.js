import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo_mixmart_white_1.svg'
import './Header.css';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="nav">
            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
                <img className="logo" style={{ width: "11%", marginTop: "5px" }} src={logo} alt="" />
                {/* <div className="nav-title">
                    Mixmart
                </div> */}
            </div>
            <div className="nav-btn">
                <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div className="nav-links">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/allProducts">Explore All Products</NavLink>
                {user?.email && <NavLink to="/dashboard">Dashboard</NavLink>}
                {user?.email && <Button onClick={logOut} style={{ color: "white" }}>Log Out</Button>}
                {!user?.email && <NavLink to="/register">Register</NavLink>}
                {!user?.email && <NavLink to="/login">Login</NavLink>}
                <NavLink to="">{user?.displayName}</NavLink>
            </div>
        </div>
    );
};

export default Header;