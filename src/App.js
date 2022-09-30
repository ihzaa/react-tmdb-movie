import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider } from '@mui/material';

import Navbar from './components/Navbar';
import theme from './themes/theme';
import { MovieCard } from './components/MovieCard';
import { Box } from '@mui/system';

import movieData from './data/movies.json'
import { useState } from 'react';

const App = () => {
  const [movies, setMovies] = useState(movieData.results);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar></Navbar>
        <Box sx={{ marginTop: '64px' }}>
          {
            movies.map(movie => <MovieCard movie={movie} />)
          }
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
