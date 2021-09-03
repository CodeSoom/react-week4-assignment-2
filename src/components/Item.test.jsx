import React from 'react';

import { render } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  it('shows restaurants', () => {
    const newRestaurant = {
      id: '100',
      name: '감성타코',
      category: '양식',
      address: '신사동 가로수길',
    };

    const { container } = render((
      <Item restaurant={newRestaurant} />
    ));

    expect(container).toHaveTextContent('감성타코');
    expect(container).toHaveTextContent('양식');
    expect(container).toHaveTextContent('신사동 가로수길');
  });
});
