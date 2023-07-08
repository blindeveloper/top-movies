export interface MovieInterface {
  id: string;
  year: string;
  title: string;
  poster: string;
}

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
