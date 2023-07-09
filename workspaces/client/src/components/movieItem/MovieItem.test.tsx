import React from 'react';
import { screen, render } from '@testing-library/react';
import MovieItem from './MovieItem';

const propsList = [
  {
    movie: {
      Poster: 'https://imgurl.jpg',
      Title: 'Koko-di Koko-da',
      Type: 'movie',
      Year: '2019',
      imdbID: 'tt9355200',
    },
    key: '2e',
  },
  {
    movie: {
      Poster: 'https://imfnelgurl.jpg',
      Title: 'John Week',
      Type: 'movie',
      Year: '2005',
      imdbID: 'tt93jj55200',
    },
    key: '2ef2f',
  },
];

describe('---MovieItem Component test---', () => {
  it('should check correct data fields', () => {
    propsList.map((prop) => {
      render(<MovieItem {...prop} />);
      expect(
        screen.getByTestId(`${prop.movie.imdbID}-movie-title`).innerHTML
      ).toEqual(prop.movie.Title);
      expect(
        screen.getByTestId(`${prop.movie.imdbID}-movie-year`).innerHTML
      ).toEqual(prop.movie.Year);
    });
  });
});
