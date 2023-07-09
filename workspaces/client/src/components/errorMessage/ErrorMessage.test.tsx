import React from 'react';
import { screen, render } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

describe('---ErrorMessage Component test---', () => {
  it('should check correct data fields', () => {
    render(<ErrorMessage />);
    expect(screen.getByTestId('error-header').innerHTML).toEqual(
      'Something went wrong.'
    );
  });
});
