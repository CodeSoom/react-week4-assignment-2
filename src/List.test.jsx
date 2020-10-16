import React from 'react';

import { render } from '@testing-library/react';

import fixture from '../__fixtuers__/fixture';

import List from './List';

describe('List', () => {
  function renderList(restaurants) {
    return render(
      <List restaurants={restaurants} />,
    );
  }

  context('with restaurants', () => {
    it('renders restaurants', () => {
      const { restaurants } = fixture;

      const { container } = renderList(restaurants);

      restaurants.forEach(({ name, category, address }) => {
        expect(container).toHaveTextContent(`${name} | ${category} | ${address}`);
      });
    });
  });

  context('without restaurants', () => {
    it('renders nothing', () => {
      const restaurants = [];

      const { getByRole } = renderList(restaurants);

      expect(getByRole('list')).toBeEmptyDOMElement();
    });
  });
});
