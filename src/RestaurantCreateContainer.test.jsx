import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantCreateContainer from './RestaurantCreateContainer';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

test('RestaurantCreateContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const { getByText } = render((<RestaurantCreateContainer />
  ));

  expect(getByText(/등록/)).not.toBeNull();
});
