import { render } from '@testing-library/react';

import restaurant from '../fixtures/restaurant';

import Restaurant from './Restaurant';

describe('Restaurant', () => {
  const rednerRestaurant = () => render((
    <Restaurant restaurant={restaurant} />
  ));

  it('renders restaurant', () => {
    const { container } = rednerRestaurant();

    expect(container).toHaveTextContent(restaurant.name);
    expect(container).toHaveTextContent(restaurant.type);
    expect(container).toHaveTextContent(restaurant.address);
  });
});
