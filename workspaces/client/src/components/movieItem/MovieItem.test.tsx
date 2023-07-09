import React from 'react';
import { screen, render } from '@testing-library/react';
import MovieItem from './MovieItem';

const propsList = [
  {
    movie: {
      poster: 'https://imgurl.jpg',
      title: 'Koko-di Koko-da',
      year: '2019',
      id: 'tt9355200',
    },
    key: '2e',
  },
  {
    movie: {
      poster: 'https://imfnelgurl.jpg',
      title: 'John Week',
      year: '2005',
      id: 'tt93jj55200',
    },
    key: '2ef2f',
  },
];

describe('---MovieItem Component test---', () => {
  it('should check correct data fields', () => {
    propsList.map((prop) => {
      render(<MovieItem {...prop} />);
      expect(
        screen.getByTestId(`${prop.movie.id}-movie-title`).innerHTML
      ).toEqual(prop.movie.title);
      expect(
        screen.getByTestId(`${prop.movie.id}-movie-year`).innerHTML
      ).toEqual(prop.movie.year);
    });
  });
});
