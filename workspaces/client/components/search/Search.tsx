import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { getMoviesBySearchValue } from '../../services/resources';
import { MovieInterface, SearchProps } from '../../services/interfaces';
import { DEBOUNCE_TIMER } from '@scribbr-assessment-full-stack/common';

const Search: React.FC<SearchProps> = ({ setIsErrorState }) => {
  const [movies, setMovies] = useState<MovieInterface[]>([]);
  const [searchRequest, setSearchRequest] = useState<string>('');
  const [debouncedSearchRequest] = useDebounce(searchRequest, DEBOUNCE_TIMER);

  const handleMovieSearch = async () => {
    const movieResponse = await getMoviesBySearchValue(1, searchRequest);
    if (movieResponse.error) {
      setIsErrorState(true);
    } else {
      setMovies(movieResponse.data);
    }
  };

  useEffect(() => {
    searchRequest && handleMovieSearch();
  }, [debouncedSearchRequest]);

  return (
    <>
      <input onChange={(e) => setSearchRequest(e.target.value)} />
    </>
  );
};
export default Search;
