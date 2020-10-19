import React from 'react';
import { render, screen } from '@testing-library/react';

import Item from '../Item';

describe('Item', () => {
  const renderItem = ({ name, category, address }) => render((
    <Item
      name={name}
      category={category}
      address={address}
    />
  ));

  it('생김새 확인', () => {
    const name = '마녀주방';
    const category = '한식';
    const address = '서울시 강남구';

    renderItem({ name, category, address });

    const { getByText } = screen;

    expect(getByText(new RegExp(name, 'i'))).toBeInTheDocument();
    expect(getByText(new RegExp(category, 'i'))).toBeInTheDocument();
    expect(getByText(new RegExp(address, 'i'))).toBeInTheDocument();
  });
});
