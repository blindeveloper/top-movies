import React, { useState } from 'react';
import { Container } from 'react-grid-system';
import Search from './components/search/Search';
import ErrorMessage from './components/errorMessage/ErrorMessage';
import { useQuery } from '@apollo/client';
import { GET_TOP_MOVIES } from './queries';
import MovieItem from './components/movieItem/MovieItem';
import { SearchWrapper } from './components/search/Styled.Search';

import './index.css';

const App: React.FC = () => {
  const [isErrorState, setIsErrorState] = useState<boolean>(false);
  const topMovies = useQuery(GET_TOP_MOVIES);

  return (
    <>
      {isErrorState ? (
        <ErrorMessage />
      ) : (
        <Container fluid>
          <SearchWrapper>
            <Search setIsErrorState={setIsErrorState} />
            {!topMovies.loading &&
              topMovies.data.topMovies.map((movie) => {
                return <MovieItem key={movie.id} movie={movie} />;
              })}
          </SearchWrapper>
        </Container>
      )}
    </>
  );
};

export default App;
