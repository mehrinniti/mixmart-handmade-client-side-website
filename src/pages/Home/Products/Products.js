import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Product from '../Product/Product';
import { Box } from '@mui/system';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allproducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Box className="product-bg">
            <Container>
                <Typography sx={{ fontWeight: 'medium', p: 4 }} style={{ fontWeight: 400 }} variant="h6" component="h6">
                    WELCOME TO MIXMART
                </Typography>
                <Typography sx={{ fontWeight: '550', pb: 4 }} style={{ color: 'rgba(7,7,25, 0.8)' }} variant="h4" component="h5">
                    <span className="heading-bg">Product We Provide</span>
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.slice(0, 6).map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;