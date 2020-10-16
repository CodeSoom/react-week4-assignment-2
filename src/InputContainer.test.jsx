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
      name: '한식이 좋아!',
      category: '한식',
      address: '서울시 강남구',
    },
  }));

  context('with restaurant information', () => {
    it('renders name, category, address', () => {
      const { getByDisplayValue } = render(<InputContainer />);

      expect(getByDisplayValue('한식이 좋아!')).not.toBeNull();
      expect(getByDisplayValue('한식')).not.toBeNull();
      expect(getByDisplayValue('서울시 강남구')).not.toBeNull();
    });
  });

  context('with restaurant name is changed', () => {
    it('dispatches handleChangeName', () => {
      const { getByPlaceholderText, getByDisplayValue } = render(
        <InputContainer />,
      );

      expect(getByDisplayValue('한식이 좋아!')).not.toBeNull();

      fireEvent.change(getByPlaceholderText('이름'), {
        target: { value: '중식이 좋아!' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'updateRestaurantName',
        payload: {
          name: '중식이 좋아!',
        },
      });
    });
  });

  context('with restaurant category is changed', () => {
    it('dispatches handleChangeCategory', () => {
      const { getByPlaceholderText, getByDisplayValue } = render(
        <InputContainer />,
      );

      expect(getByDisplayValue('한식')).not.toBeNull();

      fireEvent.change(getByPlaceholderText('분류'), {
        target: { value: '중식' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'updateRestaurantCategory',
        payload: {
          category: '중식',
        },
      });
    });
  });

  context('when restaurant address is changed', () => {
    it('dispatches handleChangeAddress', () => {
      const { getByPlaceholderText, getByDisplayValue } = render(
        <InputContainer />,
      );

      expect(getByDisplayValue('서울시 강남구')).not.toBeNull();

      fireEvent.change(getByPlaceholderText('주소'), {
        target: { value: '경기도 분당구' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'updateRestaurantAddress',
        payload: {
          address: '경기도 분당구',
        },
      });
    });
  });
});
