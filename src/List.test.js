import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  context('with restaurants', () => {
    it('renders restaurants', () => {
      const restaurants = [
        {
          id: 1, name: '마녀주방', category: '한식', address: '서울시 강남구',
        },
        {
          id: 2, name: '시카고 피자', category: '양식', address: '이태원',
        },
      ];

      const { container } = render(<List restaurants={restaurants} />);

      restaurants.forEach(({ name, category, address }) => {
        expect(container).toHaveTextContent(name);
        expect(container).toHaveTextContent(category);
        expect(container).toHaveTextContent(address);
      });
    });
  });

  context('without restaurants', () => {
    it('renders restaurants', () => {
      const restaurants = [];

      const { container } = render(<List restaurants={restaurants} />);

      expect(container).toBeEmptyDOMElement();
    });
  });
});
