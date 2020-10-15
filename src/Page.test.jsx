import React from 'react';

import { render } from '@testing-library/react';

import Page from './Page';

test('Page', () => {

  const restaurants = [
    { name: '마녀주방', category: '한식', address: '서울시 강남구' },
    { name: '시카고피자', category: '양식', address: '이태원동' },
  ];

  const { container } = render((
    <Page
      restaurants={restaurants}
    />
  ));

  expect(container).toHaveTextContent(/Restaurants/);
  expect(container).toHaveTextContent(restaurants.restaurants[0].name);
});
