import React from 'react'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, Rating } from '@mui/material';

const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

export default function MovieCard({ movie }) {
    return (
        <Grid item xs={4} >
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={`${BASE_IMAGE_URL}${movie.poster_path}`}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {movie.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {movie.release_date}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <Rating name="half-rating" defaultValue={movie.vote_average} precision={0.1} max={10} readOnly />
                    </Box>
                </Box>
            </Card>
        </Grid>
    );
}
