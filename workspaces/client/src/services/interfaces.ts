export interface MovieApiItemInterface {
  Poster: string;
  Title: string;
  Year: string;
  imdbID: string;
}
export interface MovieItemInterface {
  poster: string;
  title: string;
  year: string;
  id: string;
  popularity?: number;
}

export interface SearchProps {
  setIsErrorState: (value: boolean) => void;
}

export interface MovieItemProps {
  movie: MovieItemInterface;
  handleAddMovieToTopList?: (movie: MovieItemInterface) => void;
  handleUpVoteMovie?: (id: string) => void;
  key: string;
}
export interface SearchResultProps {
  searchRequest: string;
  movies: MovieItemInterface[];
  handleAddMovieToTopList?: (movie: MovieItemInterface) => void;
}

export interface TopMoviesListProps {
  searchRequest: string;
  topMovies: {
    loading: boolean;
    data: {
      topMovies: MovieItemInterface[];
    };
  };
  handleUpVoteMovie?: (id: string) => void;
}
