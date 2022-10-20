import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './Layout';
import NotFound from '../pages/NotFound';
import TrendMovies from './TrendingMovies';
import Cast from './Cast';

const Movies = lazy(() => import('../pages/MoviesSearch'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Reviews = lazy(() => import('./Reviews'));

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
