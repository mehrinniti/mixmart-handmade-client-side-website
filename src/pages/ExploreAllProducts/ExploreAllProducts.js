import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ExploreAllProduct from './ExploreAllProduct/ExploreAllProduct';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const ExploreAllProducts = () => {
    const [exploreAllProducts, setExploreAllProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allproducts')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setExploreAllProducts(data)
            })
    }, []);
    return (
        <Box className="allProducts-bg">
            <Header></Header>
            <Container sx={{ mb: 2 }}>
                <Typography sx={{ fontWeight: 'medium', p: 4 }} style={{ fontWeight: 400 }} variant="h6" component="h6">
                    OUR All PRODUCTS
                </Typography>
                <Typography sx={{ fontWeight: '550', pb: 4 }} style={{ color: 'rgba(7,7,25, 0.8)' }} variant="h4" component="h5">
                    <span className="heading-bg">Product We Provide</span>
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        exploreAllProducts.map(allProduct => <ExploreAllProduct
                            key={allProduct._id}
                            allProduct={allProduct}
                        ></ExploreAllProduct>)
                    }
                </Grid>
            </Container>
            <Footer></Footer>
        </Box>
    );
};

export default ExploreAllProducts;