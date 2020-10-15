import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  function renderList(restaurants) {
    return render(
      <List restaurants={restaurants} />,
    );
  }

  context('with restaurants', () => {
    it('renders restaurants', () => {
      const restaurants = [
        { name: '마녀주방', category: '한식', address: '서울시 강남구' },
        { name: '시카고피자', category: '양식', address: '이태원동' },
      ];

      const { container } = renderList(restaurants);

      restaurants.forEach(({ name, category, address }) => {
        expect(container).toHaveTextContent(`${name} | ${category} | ${address}`);
      });
    });
  });

  context('without restaurants', () => {
    it('renders nothing', () => {
      const restaurants = [];

      const { getByRole } = renderList(restaurants);

      expect(getByRole('list')).toBeEmptyDOMElement();
    });
  });
});
