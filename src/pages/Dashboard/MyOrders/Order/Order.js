import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

const Order = ({ order }) => {
    const { name, email, district, phone, zipCode } = order;
    return (
        <Grid item xs={12} sm={4} md={6}>
            <Card sx={{ minWidth: 275, border: 0, borderRadius: 5, boxShadow: 5, padding: 2 }}>
                <CardContent>
                    <Typography style={{ fontWeight: 400, color: "#e2aaa1" }} gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ my: 2 }} variant="body2" color="text.secondary">
                        {email}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {phone}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {district}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {zipCode}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Order;