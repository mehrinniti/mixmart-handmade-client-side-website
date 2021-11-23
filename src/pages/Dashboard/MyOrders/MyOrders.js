import { Container, Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import Order from './Order/Order';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `https://sheltered-spire-26258.herokuapp.com/orders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email]);
    return (
        <Container sx={{ mb: 2 }}>
            <Typography sx={{ fontWeight: 'medium', p: 4 }} style={{ fontWeight: 500 }} variant="h4" component="h6">
                My Orders Here
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    orders.map(order => <Order
                        key={order._id}
                        order={order}
                    ></Order>)
                }
            </Grid>
        </Container>
    );
};

export default MyOrders;