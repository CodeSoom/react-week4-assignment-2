import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  context('with restaurant infomations', () => {
    it('renders restaurant list', () => {
      const testRestaurants = [
        {
          id: 1, name: '버튼업', category: '경양식', address: '마포구',
        },
        {
          id: 2, name: '스시로로', category: '일식', address: '동작구',
        },
      ];

      useSelector.mockImplementation((selector) => selector({
        restaurant: {
          name: '',
          category: '',
          address: '',
        },
        restaurants: testRestaurants,
      }));

      const { getByText } = render((
        <App />
      ));

      expect(getByText(/등록/)).toBeInTheDocument();
      expect(
        getByText(`${testRestaurants[0].name} | ${testRestaurants[0].category} | ${testRestaurants[0].address}`),
      ).toBeInTheDocument();
    });
  });
});
