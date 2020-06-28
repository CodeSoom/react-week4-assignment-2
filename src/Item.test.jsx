import React from 'react';

import { render } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  it('레스토랑 하나를 보여준다.', () => {
    const restaurant = {
      id: 1, name: '마녀주방', category: '한식', address: '서울시 강남구',
    };

    const { getByText } = render((
      <Item restaurant={restaurant} />
    ));

    expect(getByText(
      /마녀주방 | 한식 | 서울시 강남구/,
    )).toBeInTheDocument();
  });
});
