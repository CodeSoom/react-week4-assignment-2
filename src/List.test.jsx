import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

test('List', () => {
  const reservations = [
    {
      id: 1,
      restaurant: {
        name: '지코바',
        category: '한식',
        address: '서울시 강남구',
      },
    },
    {
      id: 2,
      restaurant: {
        name: '아웃백',
        category: '양식',
        address: '서울시 종로구',
      },
    },
  ];

  const { container } = render(
    <List
      reservations={reservations}
    />,
  );

  expect(container).toHaveTextContent('지코바|한식|서울시 강남구');
  expect(container).toHaveTextContent('아웃백|양식|서울시 종로구');
});
