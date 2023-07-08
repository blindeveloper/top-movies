import React from 'react';
import { MovieItemProps } from '../../services/interfaces';
import { Row, Col } from 'react-grid-system';
import {
  Poster,
  MovieItemWrapper,
  MovieItemTitle,
  MovieItemSubtitle,
  AddToList,
} from './StyledMovieItem';

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  return (
    <MovieItemWrapper>
      <Row align="center">
        <Col xs={2}>
          <Poster src={movie.Poster} />
        </Col>
        <Col xs={7}>
          <Row>
            <Col xs={12}>
              <MovieItemTitle>{movie.Title}</MovieItemTitle>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <MovieItemSubtitle>{movie.Year}</MovieItemSubtitle>
            </Col>
          </Row>
        </Col>
        <Col xs={3}>
          <AddToList>Add to List</AddToList>
        </Col>
      </Row>
    </MovieItemWrapper>
  );
};
export default MovieItem;
