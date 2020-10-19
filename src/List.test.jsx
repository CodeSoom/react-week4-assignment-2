import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  context('restaurantInfos가 3개 주어졌을 때', () => {
    const restaurantInfos = [
      {
        id: 1,
        name: '마녀주방',
        category: '한식',
        address: '서울시 강남구',
      },
      {
        id: 2,
        name: '시카고피자',
        category: '양식',
        address: '이태원동',
      },
      {
        id: 3,
        name: '키와미',
        category: '일식',
        address: '분당구 정자동',
      },
    ];

    it('restaurantInfo 리스트가 잘 출력된다.', () => {
      const { container } = render(<List restaurantInfos={restaurantInfos} />);

      restaurantInfos.forEach(({ name, category, address }) => {
        expect(container).toHaveTextContent(`${name} | ${category} | ${address}`);
      });
    });
  });
});
