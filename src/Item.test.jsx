import React from 'react';

import { render } from '@testing-library/react';

import Item from './Item';

test('Item', () => {
  const restaurant = {
    name: '지코바',
    category: '한식',
    address: '서울시 강남구',
  };

  const { container } = render(
    <Item
      restaurant={restaurant}
    />,
  );

  expect(container).toHaveTextContent('지코바|한식|서울시 강남구');
});
