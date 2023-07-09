import { gql } from '@apollo/client';

export const ADD_TOP_MOVIE = gql`
  mutation AddTopMovie(
    $id: ID!
    $title: String!
    $year: String!
    $poster: String!
  ) {
    addTopMovie(id: $id, title: $title, year: $year, poster: $poster) {
      id
    }
  }
`;
