import React from 'react';

import { render } from '@testing-library/react';

import Item from './Item';

test('Item', () => {
  const { container } = render((
    <Item
      info={
        {
          name: '마녀주방',
          category: '한식',
          location: '서울시 강남구',
        }
      }
    />
  ));

  expect(container).toHaveTextContent(/마녀주방 | 한식 | 서울시 강남구/);
});
