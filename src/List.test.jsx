import React from 'react';

import { render } from '@testing-library/react';

import List from './List';
import { restaurantsFixture } from './fixtures/fixtures';

describe('List', () => {
  const listRender = (restaurants) => render((
    <List
      restaurants={restaurants}
    />
  ));

  context('with restaurants', () => {
    it('"restaurants"가 보인다.', () => {
      const { container } = listRender(restaurantsFixture);

      restaurantsFixture.forEach(({ name, address, category }) => {
        expect(container).toHaveTextContent(`${name} | ${category} | ${address}`);
      });
    });
  });

  context('without restaurants', () => {
    const restaurants = [];

    it('nothing renders restaurants', () => {
      const { container } = listRender(restaurants);

      expect(container).toBeEmptyDOMElement();
    });
  });
});
