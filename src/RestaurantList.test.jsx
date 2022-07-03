import { render } from '@testing-library/react';

import restaurants from '../fixtures/restaurants';

import RestaurantList from './RestaurantList';

describe('RestaurantList', () => {
  const rednerRestaurantList = () => render((
    <RestaurantList restaurants={restaurants} />
  ));

  it('renders restaurants', () => {
    const { container } = rednerRestaurantList();

    restaurants.forEach(({ name, type, address }) => {
      expect(container).toHaveTextContent(name);
      expect(container).toHaveTextContent(type);
      expect(container).toHaveTextContent(address);
    });
  });
});
