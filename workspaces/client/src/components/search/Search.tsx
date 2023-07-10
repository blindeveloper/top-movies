import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useDebounce } from 'use-debounce';
import { getMoviesBySearchValue } from '../../services/resources';
import { MovieItemInterface, SearchProps } from '../../services/interfaces';
import { DEBOUNCE_TIMER } from '@scribbr-assessment-full-stack/common';
import { SearchInput, Notification } from './StyledSearch';
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
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [pageCounter, setPageCounter] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [debouncedSearchRequest] = useDebounce(searchRequest, DEBOUNCE_TIMER);

  useEffect(() => {
    handleMovieSearch();
  }, [pageCounter]);

  useEffect(() => {
    handleMovieSearch();
    setMovies([]);
    setPageCounter(1);
    setErrorMessage('');
  }, [debouncedSearchRequest]);
  const handleMovieSearch = async () => {
    if (!debouncedSearchRequest) return;
    setIsLoading(true);

    const movieResponse: { data } = await getMoviesBySearchValue(
      pageCounter,
      searchRequest,
      setIsErrorState
    );

    if (movieResponse.data?.data?.Error) {
      setErrorMessage(movieResponse.data?.data?.Error);
    } else {
      setMovies([
        ...movies,
        ...formatMovieResponse(movieResponse.data?.data?.Search),
      ]);
    }
    setIsLoading(false);
  };

  const handleUpVoteMovie = (movieId) => {
    uvVoteMovie({
      variables: {
        id: movieId,
      },
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
      {isLoading && <Notification>LOADING...</Notification>}
      {errorMessage && <Notification>{errorMessage}</Notification>}
      <SearchResult
        searchRequest={searchRequest}
        movies={movies}
        handleAddMovieToTopList={handleAddMovieToTopList}
        increasePageCounter={() => setPageCounter(pageCounter + 1)}
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
