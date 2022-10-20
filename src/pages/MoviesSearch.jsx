// import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [input, setInput] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query');

  const API_KEY = 'cc1be8043ea5c323822776e71613d749';

  const handleChange = e => {
    setInput(e.target.value);
  };

  useEffect(() => {
    // console.log(searchParams.get('query'));
    searchParams.get('query') !== null
      ? setInput(searchParams.get('query'))
      : setInput('');
    const prevQueryResult = JSON.parse(
      window.localStorage.getItem('list', JSON.stringify(searchList))
    );
    if (!prevQueryResult || !query) {
      return;
    }

    setSearchList(prevQueryResult);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = async () => {
    window.localStorage.removeItem('list');
    setSearchParams(input !== '' ? { query: input } : {});
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input}`,
      {
        // HTTP Method
        method: 'GET',
      }
    );
    const data = await response.json();
    window.localStorage.setItem('list', JSON.stringify(data.results));
    setSearchList(data.results);
  };

  return (
    <main>
      <form>
        <input type="text" value={input} onChange={handleChange} />
        <button type="button" onClick={handleClick}>
          Search
        </button>
      </form>
      <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
        {searchList.map(searchItem => (
          <li key={searchItem.id} style={{ margin: '10px' }}>
            <Link to={`${searchItem.id}`} state={{ from: location }}>
              <div style={{ width: '100px' }}>
                <img
                  style={{ width: '100px' }}
                  src={`https://image.tmdb.org/t/p/w342/${searchItem.poster_path}`}
                  alt=""
                />
                <p>{searchItem.title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Movies;
