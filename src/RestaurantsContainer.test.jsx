import React from 'react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import { render } from '@testing-library/react';

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      {
        id: 1, name: '김밥제국', category: '분식', address: '서울시 강남구 역삼동',
      },
    ],
  }));

  const { getByText } = render((
    <RestaurantsContainer />
  ));

  expect(getByText(/김밥제국/)).not.toBeNull();
});
