import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import InputContainer from './InputContainer';

import {
  updateTitle,
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

      expect(dispatch).toBeCalledWith(updateTitle(
        '마녀들의 주방',
      ));
    });
  });
});
