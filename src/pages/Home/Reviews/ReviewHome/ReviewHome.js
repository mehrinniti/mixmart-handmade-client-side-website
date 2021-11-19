import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

const ReviewHome = ({ review }) => {
    const { name, description, email, rating } = review;
    return (
        <Grid item xs={12} sm={4} md={6}>
            <Card sx={{ minWidth: 275, border: 0, borderRadius: 5, boxShadow: 5, padding: 2 }}>
                <CardContent>
                    <Typography style={{ fontWeight: 400, color: "#e2aaa1" }} gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography style={{ fontWeight: 400, color: "#e2aaa1" }} gutterBottom variant="h5" component="div">
                        {email}
                    </Typography>
                    <Typography sx={{ my: 2 }} variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography style={{ fontWeight: 500 }} gutterBottom variant="h5" component="div">
                        {rating}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ReviewHome;