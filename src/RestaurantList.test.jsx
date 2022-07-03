import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { restaurants } from './fixtures/restaurant';

import RestaurantList from './RestaurantList';

jest.mock('react-redux');

describe('ListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const renderListContainer = () => render((
    <RestaurantList />
  ));

  const firstRestaurants = restaurants[0];
  const { name, type, adress } = firstRestaurants;

  it('restaurantName을 렌더링한다', () => {
    const { getByText } = renderListContainer();

    expect(getByText(name)).not.toBeNull();
  });

  it('restaurantType을 렌더링한다', () => {
    const { getByText } = renderListContainer();

    expect(getByText(type)).not.toBeNull();
  });

  it('restaurantAdress를 렌더링한다', () => {
    const { getByText } = renderListContainer();

    expect(getByText(adress)).not.toBeNull();
  });
});
