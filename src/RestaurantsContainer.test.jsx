import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from '../fixtures/restaurants';

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const { getByText } = render((<RestaurantsContainer />
  ));

  expect(getByText(/마녀주방/)).not.toBeNull();
  expect(getByText(/한식/)).not.toBeNull();
  expect(getByText(/서울시 강남구/)).not.toBeNull();
});
