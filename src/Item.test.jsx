import React from 'react';

import { render } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  context('restaurantInfo 있을 때', () => {
    const name = '마녀주방';
    const type = '한식';
    const location = '서울시 강남구';

    it('restaurantInfo "{name} | {type} | {location}" 형태로 출력한다.', () => {
      const { container } = render((
        <Item
          name={name}
          type={type}
          location={location}
        />
      ));

      expect(container).toHaveTextContent(`${name} | ${type} | ${location}`);
    });
  });
});
