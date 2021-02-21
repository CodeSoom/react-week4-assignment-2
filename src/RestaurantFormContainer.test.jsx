import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fireEvent, render } from '@testing-library/react';

import RestaurantFormContainer from './RestaurantFormContainer';

jest.mock('react-redux');

describe('RestaurantFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        name: '자매',
        category: '',
        address: '',
      },
    }));
  });

  it('renders input controls and "등록" button', () => {
    const { queryByText, queryByPlaceholderText } = render((
      <RestaurantFormContainer />
    ));

    expect(queryByPlaceholderText('이름')).not.toBeNull();
    expect(queryByPlaceholderText('분류')).not.toBeNull();
    expect(queryByPlaceholderText('주소')).not.toBeNull();
    expect(queryByText('등록')).not.toBeNull();
  });

  it('renders values of the input elements', () => {
    const { getByDisplayValue } = render((
      <RestaurantFormContainer />
    ));

    fireEvent.change(getByDisplayValue('자매'), {
      target: { value: '자매수산' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeRestaurantField',
      payload: {
        name: 'name',
        value: '자매수산',
      },
    });
  });

  it('renders click event', () => {
    const { getByText } = render((
      <RestaurantFormContainer />
    ));

    fireEvent.click(getByText('등록'));

    expect(dispatch).toBeCalledWith({
      type: 'addRestaurant',
    });
  });
});
