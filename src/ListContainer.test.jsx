import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const restaurants = [
    {
      id: 1, name: 'Seoul Pizza', type: 'Western', address: 'Seoul Iteawon',
    },
    {
      id: 2, name: 'Busan Rice', type: 'Korean', address: 'Busan Daeyeon',
    },
  ];

  context('when there are restaurants', () => {
    it('display restaurant list', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurants,
      }));

      const { getByText } = render((
        <ListContainer />
      ));

      expect(getByText(/Seoul Iteawon/)).not.toBeNull();
    });
  });
});
