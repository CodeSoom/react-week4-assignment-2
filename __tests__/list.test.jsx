import React from 'react';

import { render } from '@testing-library/react';

import List from '../src/components/List';

describe('List', () => {
  const renderList = (restaurants) => render((
    <List restaurants={restaurants} />
  ));

  context('renderList is exist', () => {
    const restaurants = [
      {
        id: 100, name: '마녀주방', category: '한식', address: '서울시 강남구',
      },
      {
        id: 101, name: '시카고피자', category: '양식', address: '이태원동',
      },
    ];

    it('render restaurants', () => {
      const { getByText } = renderList(restaurants);

      expect(getByText(/마녀주방/)).not.toBeNull();
      expect(getByText(/시카고피자/)).not.toBeNull();
    });
  });

  context('renderList is empty', () => {
    it('not render anything', () => {
      const { container } = renderList([]);

      expect(container).toBeEmptyDOMElement();
    });
  });
});
