import React from 'react';

import { render } from '@testing-library/jest-dom';

import List from './List';

describe('List', () => {
  context('restourantInfos가 3개 주어졌을 때', () => {
    const restaurantInfos = [
      {
        name: '마녀주방',
        type: '한식',
        location: '서울시 강남구',
      },
      {
        name: '시카고피자',
        type: '양식',
        location: '이태원동',
      },
      {
        name: '키와미',
        type: '일식',
        location: '분당구 정자동',
      },
    ];

    it('retourantInfo 리스트가 잘 출력된다.', () => {
      const { container } = render(<List restaurantInfos={restaurantInfos} />);

      restaurantInfos.forEach(({ name, type, location }) => {
        expect(container).toHaveTextContent(`${name} | ${type} | ${location}`);
      });
    });
  });
});
