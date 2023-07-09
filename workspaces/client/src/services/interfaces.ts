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
  key: string;
}
