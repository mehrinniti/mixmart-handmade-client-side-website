import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Express = ({ express }) => {
    const { name, img, description } = express;
    return (
        <Grid item xs={12} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, borderRadius: 5, boxShadow: 5, p: 2 }}>
                <CardMedia
                    component="img"
                    style={{ width: "100%", height: "200px", margin: "0 auto", borderRadius: "15px 0 15px 0" }}
                    height="140"
                    image={img}
                />
                <CardContent>
                    <Typography style={{ fontWeight: 600 }} gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ my: 2 }} variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Express;