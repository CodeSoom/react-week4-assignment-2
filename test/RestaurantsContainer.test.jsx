import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsContainer from '../src/RestaurantsContainer';

jest.mock('react-redux');

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      {
        id: 1, name: '김밥천국', category: '분식', address: '서울시 서초구 방배동',
      },
    ],
  }));

  const { getByText } = render((
    <RestaurantsContainer />
  ));

  expect(getByText(/김밥천국/)).not.toBeNull();
});
