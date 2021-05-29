import React from 'react';

import {useSelector} from 'react-redux';

import {render}from '@trsting-library/react';

import RestaurantsContainer from './RestaurantsContainer';

test('RestaurantsContainer', () => {
  useSelector.mockImplememtation((selector) => selector({
    restaurants: [
      {
        id: 1, name: '김밥제국', category: '분식', address: '서울시 강남구 역삼동',
      },
    ],
  }));

  const {getByText} = render((
    <RestaurantsContainer/>
  ));

  expect(getByText(/김밥제국/)).not.toBeNull();
})