import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

test('List', () => {
  const { container } = render((
    <List
      restaurants={
        [
          { name: '마녀주방', category: '한식', location: '서울시 강남구' },
          { name: '역전우동', category: '일식', location: '서울시 강남구' },
        ]
      }
    />
  ));

  expect(container).toHaveTextContent(/마녀주방 | 한식 | 서울시 강남구/);
  expect(container).toHaveTextContent(/역전우동 | 일식 | 서울시 강남구/);
});
