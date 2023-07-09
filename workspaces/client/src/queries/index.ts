import { gql } from '@apollo/client';

export const GET_TOP_MOVIES = gql`
  query {
    topMovies {
      id
      title
      year
      poster
      popularity
    }
  }
`;
