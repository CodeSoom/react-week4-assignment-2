import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  it('renders list', () => {
    const list = [
      {
        id: 1,
        name: '마녀주방',
        category: '한식',
        address: '서울시 강남구',
      },
    ];

    const { getByText } = render(<List list={list} />);
  });
});
