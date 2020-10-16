import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      name: '마녀주방',
      category: '한식',
      address: '서울시 강남구',
    },
  }));

  context('changing restaurant name', () => {
    it('called handleChange with restaurant name', () => {
      const { getByPlaceholderText } = render(
        <InputContainer />,
      );

      fireEvent.change(getByPlaceholderText('이름'), {
        target: { value: '시카고피자' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'updateRestaurant',
        payload: {
          name: 'name',
          value: '시카고피자',
        },
      });
    });
  });

  context('changing restaurant category', () => {
    it('called handleChange with restaurant category', () => {
      const { getByPlaceholderText } = render(
        <InputContainer />,
      );

      fireEvent.change(getByPlaceholderText('분류'), {
        target: { value: '양식' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'updateRestaurant',
        payload: {
          name: 'category',
          value: '양식',
        },
      });
    });
  });

  context('changing restaurant address', () => {
    it('called handleChange with restaurant address', () => {
      const { getByPlaceholderText } = render(
        <InputContainer />,
      );

      fireEvent.change(getByPlaceholderText('주소'), {
        target: { value: '이태원동' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'updateRestaurant',
        payload: {
          name: 'address',
          value: '이태원동',
        },
      });
    });
  });

  context('when add button is clicked', () => {
    it('dispatches addRestaurant', () => {
      const { getByText } = render(<InputContainer />);

      expect(getByText('등록')).not.toBeNull();

      fireEvent.click(getByText('등록'));

      expect(dispatch).toBeCalledWith({
        type: 'addRestaurant',
      });
    });
  });
});
