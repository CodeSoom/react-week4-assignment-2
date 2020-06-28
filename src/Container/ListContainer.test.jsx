import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  context('with restaurant infomations', () => {
    const testRestaurants = [
      {
        id: 1, name: '버튼업', category: '경양식', address: '마포구',
      },
      {
        id: 2, name: '스시로로', category: '일식', address: '동작구',
      },
    ];

    it('select tasks to List component', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurants: testRestaurants,
      }));

      const { getByText } = render((
        <ListContainer />
      ));

      expect(
        getByText(`${testRestaurants[0].name} | ${testRestaurants[0].category} | ${testRestaurants[0].address}`),
      ).toBeInTheDocument();
    });
  });
});
