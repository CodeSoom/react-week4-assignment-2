import React from 'react';

import { render } from '@testing-library/jest-dom';

import Item from './Item';

describe('Item', () => {
  context('restaurantInfo 있을 때', () => {
    const restaurantInfo = {
      name: '마녀주방',
      type: '한식',
      location: '서울시 강남구',
    };

    it('restaurantInfo "{name} | {type} | {location}" 형태로 출력한다.', () => {
      const { container } = render(<Item restaurantInfo={restaurantInfo} />);
      const { name, type, location } = restaurantInfo;

      expect(container).toHaveTextContent(`${name} | ${type} | ${location}`);
    });
  });
});
