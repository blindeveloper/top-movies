import React from 'react';
import MovieItem from '../movieItem/MovieItem';
import { SearchRequestWrapper } from './SearchRequestWrapper';
import { SearchResultProps } from '../../services/interfaces';

const SearchResult: React.FC<SearchResultProps> = ({
  searchRequest,
  movies,
  handleAddMovieToTopList,
}) => {
  return (
    <>
      {searchRequest && movies.length ? (
        <SearchRequestWrapper>
          {movies.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              handleAddMovieToTopList={handleAddMovieToTopList}
            />
          ))}
        </SearchRequestWrapper>
      ) : null}
    </>
  );
};
export default SearchResult;
