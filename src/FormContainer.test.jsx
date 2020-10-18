import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import FormContainer from './FormContainer';

jest.mock('react-redux');

describe('FormContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const renderFormContainer = () => render((
    <FormContainer />
  ));

  it('"restaurant"을 등록한다.', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurant: { name: '마녀주방', category: '한식', address: '서울시 강남구' },
    }));

    const inputValue = ['마녀주방', '한식', '서울시 강남구'];

    const { getByDisplayValue, getByText } = renderFormContainer();
    const addButton = getByText(/등록/);

    inputValue.forEach((value) => {
      expect(getByDisplayValue(value)).not.toBeNull();
    });

    expect(addButton).not.toBeNull();

    fireEvent.click(addButton);

    expect(dispatch).toBeCalledWith({ type: 'addRestaurant' });
  });

  it('레스토랑 정보를 입력한다.', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurant: { name: '', category: '', address: '' },
    }));

    const { inputName, value, placeholderName } = { placeholderName: '주소', inputName: 'address', value: '서울시 강남구' };

    const { getByPlaceholderText } = renderFormContainer();

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
