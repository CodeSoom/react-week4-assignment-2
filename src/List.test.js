import { render } from '@testing-library/react';

import List from './List';

import restaurants from '../fixtures/restaurants';

describe('List', () => {
  context('with restaurants', () => {
    it('renders restaurants', () => {
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
      const emptyRestaurants = [];

      const { container } = render(<List restaurants={emptyRestaurants} />);

      expect(container).toBeEmptyDOMElement();
    });
  });
});
