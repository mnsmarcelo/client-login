import React from 'react';
import { screen, render } from '@testing-library/react';
import Login from 'src/presentation/pages/login';

const maketSut = (): void => {
  render(<Login />);
};

describe('Login Component', () => {
  test('Should have a title', () => {
    maketSut();
    expect(screen.getByText('Welcome')).toBeInTheDocument();
  });
});
