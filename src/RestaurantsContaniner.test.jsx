import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RestaurantsContaniner from './RestaurantsContaniner';

import restaurants from './fixtures/restaurants';

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();
  // useDispatch.mockImplementation(()=>dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  it('RestaurantsContainer', () => {
    const { getByText } = render((
      <RestaurantsContaniner />
    ));
    expect(getByText(/김밥제국/)).not.toBeNull();

    fireEvent.click(getByText(/등록/));

    expect(dispatch).toBeCalled({
      type: 'addRestaurant',
    });
  });
});
