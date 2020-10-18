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
      const { getByText } = listRender(restaurantsFixture);

      expect(getByText(/마녀주방/)).not.toBeNull();
      expect(getByText(/시카고피자/)).not.toBeNull();
      expect(getByText(/키와미/)).not.toBeNull();
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
