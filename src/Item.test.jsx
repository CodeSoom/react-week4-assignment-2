import React from 'react';

import { render } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  context('renders', () => {
    const restaurant = {
      id: 1,
      name: '한식이 좋아!',
      category: '한식',
      address: '서울시 강남구',
    };

    it('restaurant name, categrory, address', () => {
      const { container } = render(<Item restaurant={restaurant} />);

      expect(container).toHaveTextContent('한식이 좋아');
      expect(container).toHaveTextContent('한식');
      expect(container).toHaveTextContent('서울시 강남구');
    });
  });
});
