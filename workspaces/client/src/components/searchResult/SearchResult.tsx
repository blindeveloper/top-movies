import React from 'react';
import MovieItem from '../movieItem/MovieItem';
import { SearchRequestWrapper, LoadMore } from './SearchResultStyled';
import { SearchResultProps } from '../../services/interfaces';

const SearchResult: React.FC<SearchResultProps> = ({
  searchRequest,
  movies,
  handleAddMovieToTopList,
  increasePageCounter,
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

          <LoadMore onClick={() => increasePageCounter()}>
            Load more 🏋️
          </LoadMore>
        </SearchRequestWrapper>
      ) : null}
    </>
  );
};
export default SearchResult;
