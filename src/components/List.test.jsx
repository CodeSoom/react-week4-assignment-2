import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  const restaurants = [
    {
      id: 100,
      name: '마녀주방',
      category: '한식',
      address: '서울시 강남구',
    },
    {
      id: 101,
      name: '홍초밥',
      category: '일식',
      address: '서울시 망원동',
    },
    {
      id: 102,
      name: '키와미',
      category: '일식',
      address: '분당구 정자동',
    },
  ];

  it('shows restaurants list', () => {
    const { container } = render((
      <List restaurants={restaurants} />
    ));

    expect(container).toHaveTextContent('마녀주방');
    expect(container).toHaveTextContent('홍초밥');
    expect(container).toHaveTextContent('서울시 강남구');
  });
});
