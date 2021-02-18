import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  it('renders restaurant information', () => {
    const restaurants = [
      {
        id: 1,
        name: '마녀주방',
        type: '한식',
        address: '서울시 강남구',
      },
    ];

    const { getByText } = render((
      <List
        restaurants={restaurants}
      />
    ));

    expect(getByText(/마녀주방/)).not.toBeNull();
  });
});
