import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import InputContainer from './InputContainer';

import {
  updateRestaurant, addRestaurant,
} from './actions';

jest.mock('react-redux');

describe('InputContainer', () => {
  context('이름을 입력하면', () => {
    it('title이 바뀌어 반환된다.', () => {
      const dispatch = jest.fn();
      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        title: '',
      }));

      const { getByPlaceholderText } = render((
        <InputContainer />
      ));

      const input = getByPlaceholderText('이름');
      fireEvent.change(input, {
        target: {
          value: '마녀들의 주방',
        },
      });

      const target = {
        name: 'title',
        value: '마녀들의 주방',
      };

      expect(dispatch).toBeCalledWith(updateRestaurant(target));
    });
  });

  context('레스토랑을 등록하면', () => {
    it('목록에 등록된다.', () => {
      const dispatch = jest.fn();
      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        title: '시카고 피자',
        restaurants: [],
      }));

      const { getByText, getByDisplayValue } = render((
        <InputContainer />
      ));

      expect(getByText(/등록/)).not.toBeNull();
      expect(getByDisplayValue(/시카고 피자/)).not.toBeNull();

      fireEvent.click(getByText(/등록/));
      expect(dispatch).toBeCalledWith(addRestaurant());
    });
  });
});
