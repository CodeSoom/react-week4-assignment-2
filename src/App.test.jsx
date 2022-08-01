import { render, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({}));

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    render(<App />);
  });

  context('restaurants = []', () => {
    it('renders subject', () => {
      expect(screen.queryByText(/Restaurants/)).not.toBeNull();
    });
  });
});
