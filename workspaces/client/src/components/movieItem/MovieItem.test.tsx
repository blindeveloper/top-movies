import React from 'react';
import { screen, render } from '@testing-library/react';
import MovieItem from './MovieItem';

const propsList = [
  {
    prop: {
      movie: {
        poster: 'https://imgurl.jpg',
        title: 'Koko-di Koko-da',
        year: '2019',
        id: 'wfwefwe',
        popularity: 10,
      },
      key: '345rf',
    },
    result: {
      actionButtonText: '🤍 10',
    },
  },
  {
    prop: {
      movie: {
        poster: 'https://imfnelgurl.jpg',
        title: 'John Week',
        year: '2005',
        id: 'tt93jj55200',
      },
      key: '2ef2f',
    },
    result: {
      actionButtonText: 'Add to List',
    },
  },
];

describe('---MovieItem Component test---', () => {
  it('should check correct data fields', () => {
    propsList.map((el) => {
      render(<MovieItem {...el.prop} />);
      expect(
        screen.getByTestId(`${el.prop.movie.id}-movie-title`).innerHTML
      ).toEqual(el.prop.movie.title);
      expect(
        screen.getByTestId(`${el.prop.movie.id}-movie-year`).innerHTML
      ).toEqual(el.prop.movie.year);
      expect(
        screen.getByTestId(`${el.prop.movie.id}-movie-action-button`).innerHTML
      ).toContain(el.result.actionButtonText);
    });
  });
});
