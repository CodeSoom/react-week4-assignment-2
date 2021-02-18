import React from 'react';

import { render } from '@testing-library/react';

import ListItem from './ListItem';

describe('ListItem', () => {
  it('renders List Item', () => {
    const { name, category, address } = {
      name: '마녀주방',
      category: '한식',
      address: '서울시 강남구',
    };

    const { getByText } = render(
      <ListItem
        name={name}
        category={category}
        address={address}
      />,
    );
  });
});
