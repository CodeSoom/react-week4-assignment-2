import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsCreateContainer from './RestaurantsCreateContainer';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

test('RestaurantsCreateContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const { getByText } = render((<RestaurantsCreateContainer />
  ));

  expect(getByText(/등록/)).not.toBeNull();
});
