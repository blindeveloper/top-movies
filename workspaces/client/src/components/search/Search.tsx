import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useDebounce } from 'use-debounce';
import { getMoviesBySearchValue } from '../../services/resources';
import { MovieApiItemInterface, SearchProps } from '../../services/interfaces';
import { DEBOUNCE_TIMER } from '@scribbr-assessment-full-stack/common';
import MovieItem from '../movieItem/MovieItem';
import { SearchWrapper, SearchInput } from './Styled.Search';
import { Container, Row, Col } from 'react-grid-system';
import { GET_TOP_MOVIES } from '../../queries';

const Search: React.FC<SearchProps> = ({ setIsErrorState }) => {
  const topMovies = useQuery(GET_TOP_MOVIES);
  const [movies, setMovies] = useState<MovieApiItemInterface[]>([]);
  const [searchRequest, setSearchRequest] = useState<string>('');
  const [debouncedSearchRequest] = useDebounce(searchRequest, DEBOUNCE_TIMER);
  console.log('topMovies: ', topMovies);

  const handleMovieSearch = async () => {
    const movieResponse = await getMoviesBySearchValue(1, searchRequest);
    if (movieResponse.error) {
      setIsErrorState(true);
    } else {
      movieResponse && setMovies(movieResponse.data);
    }
  };

  useEffect(() => {
    debouncedSearchRequest && handleMovieSearch();
  }, [debouncedSearchRequest]);

  return (
    <Container fluid>
      <SearchWrapper>
        <Row>
          <Col xs={12}>
            <SearchInput
              onChange={(e) => setSearchRequest(e.target.value)}
              placeholder="🔎 Add your favorite movie"
            />
          </Col>
        </Row>
        {debouncedSearchRequest &&
          movies &&
          movies.map((movie) => <MovieItem key={movie.imdbID} movie={movie} />)}
      </SearchWrapper>
    </Container>
  );
};
export default Search;
