import React, { useEffect, useState } from 'react';
import { getMoviesBySearchValue } from '../../services/resources';
import { Movie } from '../../services/interfaces';

const Search: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchRequest, setSearchRequest] = useState<string>('');

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
  }, [searchRequest]);

  return (
    <>
      <input onChange={(e) => setSearchRequest(e.target.value)} />
    </>
  );
};
export default Search;
