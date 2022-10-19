import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

const API_KEY = 'cc1be8043ea5c323822776e71613d749';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();

  getMoviesById();

  async function getMoviesById() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`,
      {
        // HTTP Method
        method: 'GET',
      }
    );
    const data = await response.json();
    setMovie(data);
  }

  return (
    <main>
      <Link to={location?.state?.from ?? '/home'}>
        <button>← Go back</button>
      </Link>

      <MovieInfo>
        <PosterStyled
          src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
          alt=""
        />
        <div>
          <h2>{movie.original_title}</h2>
          <p>User score: {Math.floor(movie.vote_average * 10)}%</p>
          <h4>Overview</h4>
          <p>{movie.overview}</p>
          <h4>Genres</h4>

          <GenresStyled>
            {movie?.genres?.map(genre => (
              <LiStyled key={genre.id}>{genre.name}</LiStyled>
            ))}
          </GenresStyled>
        </div>
      </MovieInfo>
      <ul>
        <li>
          <strong>Additional information</strong>
        </li>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};

const PosterStyled = styled.img`
  margin: 10px 20px 0px 5px;
`;

const MovieInfo = styled.div`
  margin: 10px 0px;
  display: flex;
`;

const GenresStyled = styled.div`
  display: flex;
  list-style-type: none;
`;

const LiStyled = styled.li`
  margin: 5px;
`;

export default MovieDetails;
