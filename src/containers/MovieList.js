import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import FetchTmdb from '../apis/tmdb';
import MovieCard from '../components/MovieCard'

export default function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            try {
                let data = await FetchTmdb('discover/movie');
                setMovies(data.results);
            }
            catch (err) {
                console.log(err);
            }
        }

        getMovies();
    }, []);

    return (
        <Grid container spacing={2} sx={{ paddingLeft: "1rem", paddingRight: "1rem", marginTop: "50px" }}>
            {
                movies.map((movie, i) => <MovieCard movie={movie} key={i} />)
            }
        </Grid>
    )
}
