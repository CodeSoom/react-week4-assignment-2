import React from 'react';

import { render } from '@testing-library/react';

import Page from './Page';

test('Page', () => {
  const restaurants = [
    { name: '마녀주방', category: '한식', address: '서울시 강남구' },
    { name: '시카고피자', category: '양식', address: '이태원동' },
  ];

  const restaurant = {
    name: '키와미',
    category: '일식',
    address: '분당구 정자동',
  };

  const { container, getByDisplayValue } = render((
    <Page
      restaurants={restaurants}
    />
  ));

  expect(container).toHaveTextContent(/Restaurants/);
  expect(container).toHaveTextContent(restaurants[0].name);
  expect(getByDisplayValue(restaurant.name)).toBeInTheDocument();  
});
