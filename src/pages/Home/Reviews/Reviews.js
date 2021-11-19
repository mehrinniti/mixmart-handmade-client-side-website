import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewHome from './ReviewHome/ReviewHome';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/review')
            .then(result => {
                setReviews(result.data);
            }).catch(error => {
                console.log(error.message);
            })
    }, [])
    return (
        <Box className="product-bg">
            <Container>
                <Typography sx={{ fontWeight: 'medium', pt: 10 }} style={{ fontWeight: 450, fontSize: 16 }} variant="h6" component="h6">
                    WHAT PEOPLE SAY ABOUT US
                </Typography>
                <Typography sx={{ fontWeight: '550', p: 4 }} style={{ color: 'rgba(7,7,25, 0.8)' }} variant="h4" component="h5">
                    People Review For Us
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        reviews.map(review => <ReviewHome
                            key={review._id}
                            review={review}
                        ></ReviewHome>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Reviews;