import React from 'react';

import { render } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  const restaurant = {
    name: '키와미',
    category: '일식',
    address: '분당구 정자동',
  };

  const { getByDisplayValue, getByText } = render((
    <Input restaurant={restaurant} />
  ));

  expect(getByDisplayValue(restaurant.name));
  expect(getByDisplayValue(restaurant.category));
  expect(getByDisplayValue(restaurant.address));
  expect(getByText(/등록/));
});
