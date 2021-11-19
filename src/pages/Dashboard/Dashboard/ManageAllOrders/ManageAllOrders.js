import { Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ManageOrder from './ManageOrder/ManageOrder';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/orders')
            .then(result => {
                setOrders(result.data);
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [])
    return (
        <Container sx={{ mb: 2 }}>
            <Typography sx={{ fontWeight: 'medium', p: 4 }} style={{ fontWeight: 500 }} variant="h4" component="h6">
                Manage All Orders
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    orders.map(order => <ManageOrder
                        key={order._id}
                        order={order}
                    ></ManageOrder>)
                }
            </Grid>
        </Container>
    );
};

export default ManageAllOrders;