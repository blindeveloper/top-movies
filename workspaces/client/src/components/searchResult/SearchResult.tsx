import React from 'react';
import MovieItem from '../movieItem/MovieItem';
import { SearchResultProps } from '../../services/interfaces';

const SearchResult: React.FC<SearchResultProps> = ({
  searchRequest,
  movies,
  handleAddMovieToTopList,
}) => {
  return (
    <>
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
export default SearchResult;
