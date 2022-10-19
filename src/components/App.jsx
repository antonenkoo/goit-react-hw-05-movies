import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import MovieDetails from './MovieDetails';
import NotFound from './NotFound';
import TrendMovies from './TrendingMovies';
import Cast from './Cast';
import Reviews from './Reviews';
import Movies from '../pages/MoviesSearch';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<TrendMovies />}></Route>
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="movies" element={<Movies />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};
