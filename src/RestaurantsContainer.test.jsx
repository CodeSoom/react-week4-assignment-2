import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      {
        id: 1, name: '마녀주방', category: '한식', address: '서울시 강남구',
      },
    ],
  }));

  const { getByText } = render((<RestaurantsContainer />
  ));

  expect(getByText(/마녀주방/)).not.toBeNull();
  expect(getByText(/한식/)).not.toBeNull();
  expect(getByText(/서울시 강남구/)).not.toBeNull();
});
