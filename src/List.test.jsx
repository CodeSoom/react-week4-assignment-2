import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  context('with restarants', () => {
    const restaurants = [
      { name: '마녀주방', category: '한식', address: '서울시 강남구' },
      { name: '시카고피자', category: '양식', address: '이태원동' },
    ];

    it('renders information of restaurants', () => {
      const { container } = render((
        <List restaurants={restaurants} />
      ));

      restaurants.forEach(({ name, category, address }) => {
        expect(container).toHaveTextContent(
          `${name} | ${category} | ${address}`,
        );
      });
    });
  });

  context('without restaurants', () => {
    const restaurants = [];

    it('renders default message', () => {
      const defaultMessage = '식당이 없어요!';

      const { container } = render((
        <List restaurants={restaurants} />
      ));

      expect(container).toHaveTextContent(defaultMessage);
    });
  });
});
