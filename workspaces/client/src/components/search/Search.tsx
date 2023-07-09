import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useDebounce } from 'use-debounce';
import { getMoviesBySearchValue } from '../../services/resources';
import { MovieApiItemInterface, SearchProps } from '../../services/interfaces';
import { DEBOUNCE_TIMER } from '@scribbr-assessment-full-stack/common';
import MovieItem from '../movieItem/MovieItem';
import { SearchWrapper, SearchInput } from './Styled.Search';
import { Container, Row, Col } from 'react-grid-system';
import { GET_TOP_MOVIES } from '../../queries';
import { ADD_TOP_MOVIE } from '../../mutations';

const Search: React.FC<SearchProps> = ({ setIsErrorState }) => {
  const topMovies = useQuery(GET_TOP_MOVIES);
  const [addTopMovie] = useMutation(ADD_TOP_MOVIE);

  const [movies, setMovies] = useState<MovieApiItemInterface[]>([]);
  const [searchRequest, setSearchRequest] = useState<string>('');
  const [debouncedSearchRequest] = useDebounce(searchRequest, DEBOUNCE_TIMER);

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

  const handleAddMovieToTopList = (movie: MovieApiItemInterface) => {
    addTopMovie({
      variables: {
        id: movie.imdbID,
        title: movie.Title,
        type: movie.Type,
        year: movie.Year,
        poster: movie.Poster,
      },
      refetchQueries: [{ query: GET_TOP_MOVIES }],
    });
  };

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
          movies.map((movie) => (
            <MovieItem
              key={movie.imdbID}
              movie={movie}
              handleAddMovieToTopList={handleAddMovieToTopList}
            />
          ))}
      </SearchWrapper>
      {!topMovies.loading &&
        topMovies.data.topMovies.map((movie) => {
          return <div key={movie.id}>{movie.title}</div>;
        })}
    </Container>
  );
};
export default Search;
