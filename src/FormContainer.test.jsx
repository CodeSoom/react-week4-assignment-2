import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import { restaurantFixture, initRestaurant, inputTypes } from './fixtures/fixtures';
import FormContainer from './FormContainer';

jest.mock('react-redux');

describe('FormContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  const renderFormContainer = () => render((
    <FormContainer />
  ));

  it('"restaurant"을 등록한다.', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurant: restaurantFixture,
    }));

    const { getByDisplayValue, getByText } = renderFormContainer();
    const addButton = getByText(/등록/);

    Object.values(restaurantFixture).forEach((value) => {
      expect(getByDisplayValue(value)).not.toBeNull();
    });

    expect(addButton).not.toBeNull();

    fireEvent.click(addButton);

    expect(dispatch).toBeCalledWith({ type: 'addRestaurant' });
  });

  it('레스토랑 정보를 입력한다.', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurant: initRestaurant,
    }));

    const { getByPlaceholderText } = renderFormContainer();

    inputTypes.forEach(({ inputName, value, placeholderName }) => {
      fireEvent.change(getByPlaceholderText(placeholderName), {
        target: { value, name: inputName },
      });

      expect(dispatch).toBeCalledWith({
        type: 'updateRestaurant',
        payload: {
          value,
          name: inputName,
        },
      });
    });
  });
});
