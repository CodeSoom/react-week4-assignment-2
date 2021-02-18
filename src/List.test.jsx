import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  context('with information', () => {
    const restaurants = [
      {
        id: 1,
        name: '마녀주방',
        category: '한식',
        address: '서울시 강남구',
      },
    ];

    it('renders restaurant information', () => {
      const { getByText } = render((
        <List
          restaurants={restaurants}
        />
      ));

      expect(getByText(/마녀주방/)).not.toBeNull();
    });
  });

  context('without information', () => {
    const restaurants = [];

    it('renders nothing', () => {
      const { container } = render((
        <List
          restaurants={restaurants}
        />
      ));

      expect(container).not.toHaveTextContent(/\|/);
    });
  });
});
