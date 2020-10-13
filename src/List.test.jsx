import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  context('with restaurants', () => {
    it('renders restaurants', () => {
      const restaurants = [
        { name: '마녀주방', category: '한식', address: '서울시 강남구' },
        { name: '시카고피자', category: '양식', address: '이태원동' },
      ];

      const { getByText } = render(
        <List restaurants={restaurants} />,
      );

      expect(getByText('마녀주방 | 한식 | 서울시 강남구')).not.toBeNull();
      expect(getByText('시카고피자 | 양식 | 이태원동')).not.toBeNull();
    });
  });

  context('without restaurants', () => {
    it('renders nothing', () => {
      const restaurants = [];

      const { getByRole } = render(
        <List restaurants={restaurants} />,
      );

      expect(getByRole('list')).toBeEmptyDOMElement();
    });
  });
});
