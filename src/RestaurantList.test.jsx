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

  it('restaurants를 렌더링한다', () => {
    const firstRestaurants = restaurants[0];
    const { name, type, adress } = firstRestaurants;

    const { container } = renderListContainer();

    expect(container).toHaveTextContent(name, type, adress);
  });
});
