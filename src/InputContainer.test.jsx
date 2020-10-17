import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurant: { name: '마녀주방', category: '한식', address: '서울시 강남구' },
  }));

  const renderInputContainer = () => render((
    <InputContainer />
  ));

  it('"restaurant"을 등록한다.', () => {
    const inputValue = ['마녀주방', '한식', '서울시 강남구'];

    const { getByDisplayValue, getByText } = renderInputContainer();
    const addButton = getByText(/등록/);

    inputValue.forEach((value) => {
      expect(getByDisplayValue(value)).not.toBeNull();
    });

    expect(addButton).not.toBeNull();

    fireEvent.click(addButton);

    expect(dispatch).toBeCalledWith({ type: 'addRestaurant' });
  });

  it('레스토랑 정보를 입력한다.', () => {
    const inputType = [
      { placeholderName: '이름', inputName: 'name', value: '마녀주방' },
      { placeholderName: '분류', inputName: 'category', value: '한식' },
      { placeholderName: '주소', inputName: 'address', value: '서울시 강남구' },
    ];

    const { getByPlaceholderText } = renderInputContainer();

    inputType.forEach(({ placeholderName, inputName, value }) => {
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
