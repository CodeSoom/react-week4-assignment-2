import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantCreateContainer from './RestaurantCreateContainer';

jest.mock('react-redux');

describe('RestaurantCreateContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  describe('create restaurant', () => {
    const restaurant = {

    };

    it('', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurant,
      }));

      const { container } = render(<RestaurantCreateContainer />);
    });
  });
});
