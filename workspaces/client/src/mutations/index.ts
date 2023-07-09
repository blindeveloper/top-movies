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
      title
      year
      poster
      popularity
    }
  }
`;

export const UP_VOTE_MOVIE = gql`
  mutation UpVoteMovie($id: ID!) {
    upVoteMovie(id: $id) {
      id
      title
      year
      poster
      popularity
    }
  }
`;
