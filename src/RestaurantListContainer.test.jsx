import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import restaurants from '../fixtures/restaurants';

import RestaurantListContainer from './RestaurantListContainer';

describe('RestaurantListContainer', () => {
  useSelector.mockImplementation((state) => state({
    restaurants,
  }));

  const rednerRestaurantListContainer = () => render(<RestaurantListContainer />);

  it('renders restaurants', () => {
    const { container } = rednerRestaurantListContainer();

    restaurants.forEach(({ name, type, address }) => {
      expect(container).toHaveTextContent(name);
      expect(container).toHaveTextContent(type);
      expect(container).toHaveTextContent(address);
    });
  });
});
