import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  function renderList(restaurants) {
    return render((
      <List restaurants={restaurants} />
    ));
  }

  context('with restaurants', () => {
    const restaurants = [
      {
        id: 100,
        name: '마녀주방',
        category: '양식',
        address: '강남구 서현동',
      },
      {
        id: 101,
        name: '시카고피자',
        category: '양식',
        address: '용산구 이태원동',
      },
      {
        id: 102,
        name: '카와미',
        category: '일식',
        address: '분당구 정자동',
      },
    ];

    it('renders restaurants', () => {
      const { getByText } = renderList(restaurants);

      restaurants.forEach(({ name, category, address }) => {
        expect(getByText(`${name} | ${category} | ${address}`)).not.toBeNull();
      });
    });
  });
});
