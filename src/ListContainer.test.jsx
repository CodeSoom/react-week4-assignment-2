import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

describe('ListContainer', () => {
  context('when click publish buton', () => {
    it('well displayed', () => {
      const restaurants = [
        {
          id: 0, name: "Phil's BBQ", category: 'BBQ', address: 'San Diego',
        },
        {
          id: 1, name: 'Bonchon Chicken', category: 'Chicken', address: 'San Diego',
        },
      ];
      useSelector.mockImplementation((selector) => selector({ restaurants }));

      const { container } = render((
        <ListContainer />
      ));
      restaurants.forEach((restaurant) => {
        expect(container).toHaveTextContent(restaurant.name);
        expect(container).toHaveTextContent(restaurant.category);
        expect(container).toHaveTextContent(restaurant.address);
      });
    });
  });
});
