import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantFormContainer from './RestaurantFormContainer';

jest.mock('react-redux');

describe('RestaurantFormContainer', () => {
  it('add restaurant', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        id: 101, name: 'Busan Rice', category: 'Korean', address: 'Busan Daeyeon',
      },
    }));

    const { getByText, getByDisplayValue } = render((
      <RestaurantFormContainer />
    ));

    expect(getByText(/등록/)).not.toBeNull();
    expect(getByDisplayValue(/Busan Rice/)).not.toBeNull();

    fireEvent.click(getByText(/등록/));

    expect(dispatch).toBeCalledWith({
      type: 'addRestaurant',
    });
  });

  it('change restaurant fields', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        id: 101, name: 'Noodles', category: 'Korean', address: 'Seoul Gangnam',
      },
    }));

    const { getByDisplayValue } = render((
      <RestaurantFormContainer />
    ));

    fireEvent.change(getByDisplayValue('Noodles'), {
      target: { value: 'Noodle Rice' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'updateRestaurantField',
      payload: {
        name: 'name',
        value: 'Noodle Rice',
      },
    });
  });
});
