import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  const restaurants = [
    {
      id: 1, name: 'Seoul Pizza', category: 'Western', address: 'Seoul Iteawon',
    },
    {
      id: 2, name: 'Busan Rice', category: 'Korean', address: 'Busan Daeyeon',
    },
  ];

  context('when there are restaurants', () => {
    it('display restaurant list', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurants,
      }));

      const { getByText } = render((
        <RestaurantsContainer />
      ));

      expect(getByText(/Seoul Iteawon/)).not.toBeNull();
    });
  });
});
