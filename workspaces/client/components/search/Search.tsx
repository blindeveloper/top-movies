import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { getMoviesBySearchValue } from '../../services/resources';
import { Movie } from '../../services/interfaces';

const Search: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchRequest, setSearchRequest] = useState<string>('');
  const [debouncedSearchRequest] = useDebounce(searchRequest, 500);

  const handleMovieSearch = async () => {
    const movieResponse = await getMoviesBySearchValue(1, searchRequest);
    if (movieResponse.error) {
      throw new Error(movieResponse.error);
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
