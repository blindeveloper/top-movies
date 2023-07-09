import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useDebounce } from 'use-debounce';
import { getMoviesBySearchValue } from '../../services/resources';
import { MovieItemInterface, SearchProps } from '../../services/interfaces';
import { DEBOUNCE_TIMER } from '@scribbr-assessment-full-stack/common';
import { SearchInput } from './StyledSearch';
import { Row, Col } from 'react-grid-system';
import { GET_TOP_MOVIES } from '../../queries';
import { ADD_TOP_MOVIE, UP_VOTE_MOVIE } from '../../mutations';
import { formatMovieResponse } from '../../services/tools';
import SearchResult from '../searchResult/SearchResult';
import TopMoviesList from '../topMoviesList/TopMoviesList';

const Search: React.FC<SearchProps> = ({ setIsErrorState }) => {
  const [addTopMovie] = useMutation(ADD_TOP_MOVIE);
  const topMovies = useQuery(GET_TOP_MOVIES);
  const [uvVoteMovie] = useMutation(UP_VOTE_MOVIE);

  const [movies, setMovies] = useState<MovieItemInterface[]>([]);
  const [searchRequest, setSearchRequest] = useState<string>('');
  const [debouncedSearchRequest] = useDebounce(searchRequest, DEBOUNCE_TIMER);

  useEffect(() => {
    debouncedSearchRequest && handleMovieSearch();
  }, [debouncedSearchRequest]);
  const handleMovieSearch = async () => {
    const movieResponse: { error: Error; data } = await getMoviesBySearchValue(
      1,
      searchRequest
    );
    if (movieResponse.error) {
      setIsErrorState(true);
    } else {
      movieResponse?.data && setMovies(formatMovieResponse(movieResponse.data));
    }
  };

  const handleUpVoteMovie = (movieId) => {
    uvVoteMovie({
      variables: {
        id: movieId,
      },
      refetchQueries: [{ query: GET_TOP_MOVIES }],
    });
  };

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
      <SearchResult
        searchRequest={searchRequest}
        movies={movies}
        handleAddMovieToTopList={handleAddMovieToTopList}
      />
      <TopMoviesList
        searchRequest={searchRequest}
        topMovies={topMovies}
        handleUpVoteMovie={handleUpVoteMovie}
      />
    </>
  );
};
export default Search;
