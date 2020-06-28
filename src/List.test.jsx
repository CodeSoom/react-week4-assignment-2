import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  context('레스토랑 목록이 있으면', () => {
    it('목록을 보여준다', () => {
      const restaurants = [
        {
          id: 1, name: '마녀주방', category: '한식', address: '서울시 강남구',
        },
        {
          id: 2, name: '홍콩반점', category: '중식', address: '인천 주안',
        },
        {
          id: 3, name: '스시천', category: '일식', address: '인천 남동구',
        },
      ];

      const { getByText } = render((
        <List restaurants={restaurants} />
      ));

      restaurants.forEach(({ name, category, address }) => {
        expect(getByText(`${name} | ${category} | ${address}`)).toBeInTheDocument();
      });
    });
  });
});
