import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import notFound from '../imgs/photo_2022-10-21_12-18-13.jpg';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  const API_KEY = 'cc1be8043ea5c323822776e71613d749';

  useEffect(() => {
    getCast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getCast() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`,
      {
        // HTTP Method
        method: 'GET',
      }
    );
    const data = await response.json();
    setCast(data.cast);
  }
  return (
    <div>
      <ActorsList>
        {cast.map(actor => (
          <ActorItem key={actor.id}>
            <ActorPhoto
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w342/${actor.profile_path}`
                  : notFound
              }
              alt=""
            />
            <ActorDescription>{actor.name}</ActorDescription>
            <ActorDescription>Character: {actor.character}</ActorDescription>
          </ActorItem>
        ))}
      </ActorsList>
    </div>
  );
};

const ActorPhoto = styled.img`
  width: 150px;
`;

const ActorDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ActorItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 150px;
  background-color: #f7f7f7;
  border-radius: 4px;
  height: 320px;
  padding: 5px;
`;

const ActorsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default Cast;
