import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const API_KEY = 'cc1be8043ea5c323822776e71613d749';

const TrendMovies = () => {
  const [movieList, setMovieList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getMovies();
    
  }, []);

  async function getMovies() {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
      {
        // HTTP Method
        method: 'GET',
      }
    );
    const data = await response.json();
    setMovieList(data.results);
  }

  return (
    <div>
      <h1>Tranding today</h1>
      <ul>
        {movieList.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie?.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendMovies;
