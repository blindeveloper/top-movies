import React from 'react';
import { MovieItemProps } from '../../services/interfaces';
import { Row, Col } from 'react-grid-system';
import {
  Poster,
  NoPoster,
  MovieItemWrapper,
  MovieItemTitle,
  MovieItemSubtitle,
  AddToList,
  UpVote,
  ActionWrapper,
} from './StyledMovieItem';
// [INFO] MovieItem is covering both cases with up voting and adding to list functionality
const MovieItem: React.FC<MovieItemProps> = ({
  movie,
  handleAddMovieToTopList,
  handleUpVoteMovie,
}) => {
  return (
    <MovieItemWrapper>
      <Row align="center">
        <Col xs={2}>
          {movie.poster === 'N/A' ? (
            <NoPoster>🎞️</NoPoster>
          ) : (
            <Poster src={movie.poster} />
          )}
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
        <Col xs={3} data-testid={`${movie.id}-movie-action-button`}>
          <ActionWrapper>
            {movie.popularity ? (
              <UpVote
                onClick={() => handleUpVoteMovie(movie.id)}
              >{`🤍 ${movie.popularity}`}</UpVote>
            ) : (
              <AddToList
                onClick={() => {
                  handleAddMovieToTopList(movie);
                }}
              >
                Add to List
              </AddToList>
            )}
          </ActionWrapper>
        </Col>
      </Row>
    </MovieItemWrapper>
  );
};
export default MovieItem;
