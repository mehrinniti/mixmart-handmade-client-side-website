import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, img, description, price, _id } = product;
    return (
        <Grid item xs={12} sm={4} md={6}>
            <Card sx={{ minWidth: 275, border: 0, borderRadius: 5, boxShadow: 6, padding: 2 }}>
                <CardMedia
                    component="img"
                    style={{ width: "auto", height: "200px", margin: "0 auto" }}
                    height="140"
                    image={img}
                />
                <CardContent>
                    <Typography style={{ fontWeight: 400, color: "#e2aaa1" }} gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ my: 2 }} variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography style={{ fontWeight: 500 }} gutterBottom variant="h5" component="div">
                        {price}
                    </Typography>
                    <Link to={`/purchases/${_id}`} style={{ textDecoration: "none" }}>
                        <Button style={{ backgroundColor: "#e2aaa1" }} variant="contained">Purchase</Button>
                    </Link>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Product;