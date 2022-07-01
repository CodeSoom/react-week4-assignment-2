import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import restaurant from '../fixtures/restaurant';
import restaurants from '../fixtures/restaurants';

import App from './App';

describe('App', () => {
  useSelector.mockImplementation((state) => state({
    restaurant,
    restaurants,
  }));

  it('renders a heading', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('Restaurants');
  });
});
