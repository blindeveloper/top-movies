export interface MovieApiItemInterface {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface SearchProps {
  setIsErrorState: (value: boolean) => void;
}

export interface MovieItemProps {
  movie: MovieApiItemInterface;
  key: string;
}
