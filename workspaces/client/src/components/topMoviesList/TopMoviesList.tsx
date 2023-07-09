import React from 'react';
import MovieItem from '../movieItem/MovieItem';
import { TopMoviesListProps } from '../../services/interfaces';

const TopMoviesList: React.FC<TopMoviesListProps> = ({
  searchRequest,
  topMovies,
  handleUpVoteMovie,
}) => {
  return (
    <>
      {!searchRequest &&
        !topMovies.loading &&
        topMovies.data.topMovies.map((movie) => {
          return (
            <MovieItem
              key={movie.id}
              movie={movie}
              handleUpVoteMovie={handleUpVoteMovie}
            />
          );
        })}
    </>
  );
};
export default TopMoviesList;
