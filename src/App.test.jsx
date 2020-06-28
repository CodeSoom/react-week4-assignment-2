import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  context('when there are restaurants', () => {
    it('should display restaurants', () => {
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        restaurants: [],
        restaurant: {},
      }));

      const { queryByText } = render((
        <App />
      ));

      expect(dispatch).toBeCalledWith(
        { type: 'setRestaurants', payload: { restaurants: [] } },
      );

      expect(queryByText('Busan Rice')).toBeNull();
    });
  });
});
