import React from 'react';
import { MovieItemProps } from '../../services/interfaces';
import { Row, Col } from 'react-grid-system';
import {
  Poster,
  MovieItemWrapper,
  MovieItemTitle,
  MovieItemSubtitle,
  AddToList,
  UpVote,
} from './StyledMovieItem';

const MovieItem: React.FC<MovieItemProps> = ({
  movie,
  handleAddMovieToTopList,
}) => {
  return (
    <MovieItemWrapper>
      <Row align="center">
        <Col xs={2}>
          <Poster src={movie.poster} />
        </Col>
        <Col xs={7}>
          <Row>
            <Col xs={12}>
              <MovieItemTitle data-testid={`${movie.id}-movie-title`}>
                {movie.title}
              </MovieItemTitle>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <MovieItemSubtitle data-testid={`${movie.id}-movie-year`}>
                {movie.year}
              </MovieItemSubtitle>
            </Col>
          </Row>
        </Col>
        <Col xs={3}>
          {movie.popularity ? (
            <UpVote>{`🤍 ${movie.popularity}`}</UpVote>
          ) : (
            <AddToList
              onClick={() => {
                handleAddMovieToTopList(movie);
              }}
            >
              Add to List
            </AddToList>
          )}
        </Col>
      </Row>
    </MovieItemWrapper>
  );
};
export default MovieItem;
