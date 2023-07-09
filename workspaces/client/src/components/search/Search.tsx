import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useDebounce } from 'use-debounce';
import { getMoviesBySearchValue } from '../../services/resources';
import { MovieItemInterface, SearchProps } from '../../services/interfaces';
import { DEBOUNCE_TIMER } from '@scribbr-assessment-full-stack/common';
import MovieItem from '../movieItem/MovieItem';
import { SearchInput } from './Styled.Search';
import { Row, Col } from 'react-grid-system';
import { GET_TOP_MOVIES } from '../../queries';
import { ADD_TOP_MOVIE } from '../../mutations';
import { formatMovieResponse } from '../../services/tools';

const Search: React.FC<SearchProps> = ({ setIsErrorState }) => {
  const [addTopMovie] = useMutation(ADD_TOP_MOVIE);

  const [movies, setMovies] = useState<MovieItemInterface[]>([]);
  const [searchRequest, setSearchRequest] = useState<string>('');
  const [debouncedSearchRequest] = useDebounce(searchRequest, DEBOUNCE_TIMER);

  const handleMovieSearch = async () => {
    const movieResponse: { error: Error; data } = await getMoviesBySearchValue(
      1,
      searchRequest
    );
    if (movieResponse.error) {
      setIsErrorState(true);
    } else {
      movieResponse && setMovies(formatMovieResponse(movieResponse.data));
    }
  };

  useEffect(() => {
    debouncedSearchRequest && handleMovieSearch();
  }, [debouncedSearchRequest]);

  const handleAddMovieToTopList = (movie: MovieItemInterface) => {
    addTopMovie({
      variables: {
        id: movie.id,
        title: movie.title,
        year: movie.year,
        poster: movie.poster,
      },
      refetchQueries: [{ query: GET_TOP_MOVIES }],
    });
    setSearchRequest('');
  };

  return (
    <>
      <Row>
        <Col xs={12}>
          <SearchInput
            value={searchRequest}
            onChange={(e) => setSearchRequest(e.target.value)}
            placeholder="🔎 Add your favorite movie"
          />
        </Col>
      </Row>
      {searchRequest &&
        movies &&
        movies.map((movie) => (
          <MovieItem
            key={movie.id}
            movie={movie}
            handleAddMovieToTopList={handleAddMovieToTopList}
          />
        ))}
    </>
  );
};
export default Search;
