import React from 'react';
import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import { restaurants } from '../fixture/test-data';

describe('Restaurants', () => {
  function renderRestaurants(value) {
    return render((
      <Restaurants
        restaurants={value}
      />
    ));
  }

  context('with restaurants', () => {
    it('renders list', () => {
      const { getByText } = renderRestaurants(restaurants);

      expect(getByText('치뽈레 | 양식 | 산호세')).not.toBeNull();
    });
  });

  context('without restaurants', () => {
    it('renders ', () => {
      const { container } = renderRestaurants([]);

      expect(container.innerText).toBeUndefined();
    });
  });
});
