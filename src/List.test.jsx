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
      { name: '마녀주방', type: '약식', adress: '강남구 서현동' },
      { name: '시카고피자', type: '양식', adress: '용산구 이태원동' },
      { name: '카와미', type: '일식', adress: '분당구 정자동' },
    ];

    it('renders restaurants', () => {
      const { getByText } = renderList(restaurants);

      restaurants.forEach(({ name, type, address }) => {
        expect(getByText(`${name} | ${type} | ${address}`)).not.toBeNull();
      });
    });
  });

  context('without restaurants', () => {
    const restaurants = [];

    it('do not render anything', () => {
      const { getByText } = renderList(restaurants);

      expect(getByText('레스토랑 목록 없습니다.')).toBeNull();
    });
  });
});
