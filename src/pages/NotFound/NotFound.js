import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/error-img.jpg';

const NotFound = () => {
    return (
        <div className="mt-3">
            <div>
                <img src={notFound} alt="" />
            </div>
            <Link style={{ textDecoration: "none" }} to="/">
                <Button style={{ backgroundColor: "#e2aaa1" }} variant="contained">back home</Button>
            </Link>
        </div>
    );
};

export default NotFound;