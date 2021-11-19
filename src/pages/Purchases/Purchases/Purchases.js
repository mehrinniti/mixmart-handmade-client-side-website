import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Purchases.css';

const Purchases = () => {
    const { user } = useAuth();
    const { allProductId } = useParams();
    const [product, setProduct] = useState([]);
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${allProductId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [allProductId]);
    const HandleOrderSubmit = data => {
        data.orderData = product;
        axios.post('http://localhost:5000/orders', data)
            .then(result => {
                if (result.data.insertedId) {
                    alert('Your Order Submitted Successfully');

                    reset();
                }
            })
    };
    return (
        <>
            <Header></Header>
            <Grid container spacing={{ xs: 2, md: 3, mb: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12} sm={4} md={6}>
                    <Card sx={{ width: 'auto', borderRadius: 5, boxShadow: 5, padding: 2 }}>
                        <CardMedia
                            component="img"
                            style={{ width: "auto", height: "200px", margin: "0 auto" }}
                            height="140"
                            image={product.img}
                        />
                        <CardContent>
                            <Typography style={{ fontWeight: 400, color: "#e2aaa1" }} gutterBottom variant="h5" component="div">
                                {product.name}
                            </Typography>
                            <Typography sx={{ my: 2 }} variant="body2" color="text.secondary">
                                {product.description}
                            </Typography>
                            <Typography style={{ fontWeight: 500 }} gutterBottom variant="h5" component="div">
                                {product.price}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4} md={6}>
                    <form className="input-form-box" onSubmit={handleSubmit(HandleOrderSubmit)}>
                        <input type="text" defaultValue={user?.displayName} {...register('name')} />
                        <input type="email" defaultValue={user?.email} {...register('email')} />
                        <input type="number" placeholder="Enter your phone number"  {...register('phone')} />
                        <input type="text" placeholder="Enter your district name"  {...register('district')} />
                        <input type="text" placeholder="Enter your zip code"  {...register('zipCode')} />
                        <input type="submit" value="Purchase Order" />
                    </form>
                </Grid>
            </Grid>
            <Footer></Footer>
        </>
    );
};

export default Purchases;