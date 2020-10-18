import React from 'react';

import { render } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  context('restaurantInfo 있을 때', () => {
    const name = '마녀주방';
    const category = '한식';
    const address = '서울시 강남구';

    it('restaurantInfo "{name} | {type} | {location}" 형태로 출력한다.', () => {
      const { container } = render((
        <Item
          name={name}
          category={category}
          address={address}
        />
      ));

      expect(container).toHaveTextContent(`${name} | ${category} | ${address}`);
    });
  });
});
