import { render } from '@testing-library/react';

import restaurant from '../fixtures/restaurant';

import Restaurant from './Restaurant';

describe('Restaurant', () => {
  const rednerRestaurant = () => render((
    <Restaurant restaurant={restaurant} />
  ));

  it('renders the restaurant name in props', () => {
    const { container } = rednerRestaurant();

    expect(container).toHaveTextContent(restaurant.name);
  });

  it('renders the restaurant type in props', () => {
    const { container } = rednerRestaurant();

    expect(container).toHaveTextContent(restaurant.type);
  });

  it('renders the restaurant address in props', () => {
    const { container } = rednerRestaurant();

    expect(container).toHaveTextContent(restaurant.address);
  });
});
