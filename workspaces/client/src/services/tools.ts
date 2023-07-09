import { MovieApiItemInterface } from './interfaces';
export const formatMovieResponse = (movies: MovieApiItemInterface[]) =>
  movies.map((movie) => {
    return {
      poster: movie.Poster,
      title: movie.Title,
      year: movie.Year,
      id: movie.imdbID,
    };
  });
