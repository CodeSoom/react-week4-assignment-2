import React from 'react';

import { render } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  const itemRender = (restaurants) => render((
    <Item
      restaurants={restaurants}
    />
  ));

  const restaurants = [
    {
      id: 1, name: '마녀주방', type: '한식', address: '서울시 강남구',
    },
    {
      id: 2, name: '시카고피자', type: '양식', address: '이태원동',
    },
    {
      id: 3, name: '키와미', type: '일식', address: '분당구 정자동',
    },
  ];

  it('"restaurant"이 보인다.', () => {
    const { getByText } = itemRender(restaurants);

    restaurants.forEach(({ name }) => {
      expect(getByText(name)).not.toBeNull();
    });
  });
});
