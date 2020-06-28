import React from 'react';
import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import { restaurants } from '../fixture/test-data';

describe('Restaurants', () => {
  function renderList(listItems) {
    return render((
      <Restaurants
        restaurants={listItems}
      />
    ));
  }

  context('with restaurants', () => {
    it('renders list', () => {
      const { getByText } = renderList(restaurants);

      expect(getByText('치뽈레 | 양식 | 산호세')).not.toBeNull();
    });
  });

  context('without restaurants', () => {
    it('renders ', () => {
      const { container } = renderList([]);

      expect(container.innerText).toBeUndefined();
    });
  });
});
