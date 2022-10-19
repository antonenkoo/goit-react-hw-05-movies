import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const API_KEY = 'cc1be8043ea5c323822776e71613d749';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getReviews() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`,
      {
        // HTTP Method
        method: 'GET',
      }
    );
    const data = await response.json();
    setReviews(data.results);
  }

  return (
    <div>
      <ul>
        {reviews.length !== 0 ? (
          reviews.map(review => (
            <li key={review.author_details.username}>
              <img src={`${review.author_details.avatar_path}`} alt="" />
              <PStyled>
                <strong>Author: {review.author}</strong>
              </PStyled>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <h3
            style={{
              backgroundColor: '#ffc1c1',
              width: '270px',
              height: '42px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'black',
              borderRadius: '4px',
            }}
          >
            Nothing reviews was found
          </h3>
        )}
      </ul>
    </div>
  );
};

const PStyled = styled.p`
  margin-bottom: 0px;
`;

export default Reviews;
