import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import given from 'given2';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

const dispatch = jest.fn();

describe('InputContainer', () => {
  given('inputText', () => ({
    name: given.restaurantName,
    category: given.category,
    address: given.address,
  }));

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      name: given.restaurantName,
      category: given.category,
      address: given.address,
    }));
  });

  describe('handleRegisterClick', () => {
    it('works when clicked', () => {
      given('restaurantName', () => '소년식당');
      given('category', () => '소식');
      given('address', () => '내마음속');

      const { queryByText, queryByDisplayValue } = render((<InputContainer />));

      expect(queryByText(/등록/)).not.toBeNull();
      expect(queryByDisplayValue(/소년식당/)).not.toBeNull();
      expect(queryByDisplayValue(/소식/)).not.toBeNull();
      expect(queryByDisplayValue(/내마음속/)).not.toBeNull();

      fireEvent.click(queryByText(/등록/));

      expect(dispatch).toBeCalledWith({ type: 'addRegister' });
    });
  });

  describe('handleTextChange', () => {
    it('works when input filled', () => {
      given('restaurantName', () => '');
      given('category', () => '');
      given('address', () => '');

      const { queryByPlaceholderText } = render((<InputContainer />));

      expect(queryByPlaceholderText(/이름/).value).toEqual('');

      fireEvent.change(queryByPlaceholderText(/이름/), {
        target: { value: '변했어요' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'updateInputText',
        payload: {
          name: '변했어요',
        },
      });
    });
  });
});
