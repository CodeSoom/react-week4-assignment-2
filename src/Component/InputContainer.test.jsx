import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

import {
  updateName,
  updateCategory,
  updateAddress,
  addInformation,
} from '../actions';

jest.mock('react-redux');

describe('InputContainer', () => {
  context('이름, 분류, 주소가 없는 경우', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    const information = {
      name: '',
      category: '',
      address: '',
    };

    useSelector.mockImplementation((selector) => selector(information));

    it('입력 창과 등록 버튼을 보여준다', () => {
      const { getByTestId, getByText } = render((
        <InputContainer />
      ));

      expect(getByTestId(/name/)).not.toBeNull();
      expect(getByTestId(/category/)).not.toBeNull();
      expect(getByTestId(/address/)).not.toBeNull();
      expect(getByText(/등록/)).not.toBeNull();
    });

    it('이름 정보를 입력하면 updateName 액션이 전달된다.', () => {
      const { getByTestId } = render((
        <InputContainer />
      ));

      fireEvent.change(getByTestId(/name/), {
        target: { value: '불짬뽕' },
      });

      expect(dispatch).toBeCalledWith(updateName('불짬뽕'));
    });

    it('분류 정보를 입력하면 updateCategory 액션이 전달된다.', () => {
      const { getByTestId } = render((
        <InputContainer />
      ));

      fireEvent.change(getByTestId(/category/), {
        target: { value: '중식' },
      });

      expect(dispatch).toBeCalledWith(updateCategory('중식'));
    });

    it('주소 정보를 입력하면 updateAddress 액션이 전달된다.', () => {
      const { getByTestId } = render((
        <InputContainer />
      ));

      fireEvent.change(getByTestId(/address/), {
        target: { value: '천안' },
      });

      expect(dispatch).toBeCalledWith(updateAddress('천안'));
    });
  });

  context('이름, 분류, 주소가 있는 경우', () => {
    const information = {
      name: '불짬뽕',
      category: '중식',
      address: '대구',
    };
    it('입력 창에 이름, 분류, 주소 정보가 입력되어있다.', () => {
      useSelector.mockImplementation((selector) => selector(information));

      const { getByTestId } = render((
        <InputContainer />
      ));

      expect(getByTestId(/name/)).toHaveValue('불짬뽕');
      expect(getByTestId(/category/)).toHaveValue('중식');
      expect(getByTestId(/address/)).toHaveValue('대구');
    });

    it('등록 버튼을 누르면 AddInformation 액션이 전달된다.', () => {
      useSelector.mockImplementation((selector) => selector(information));

      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      const { getByText } = render((
        <InputContainer />
      ));

      fireEvent.click(getByText('등록'));

      expect(dispatch).toBeCalledWith(addInformation());
    });
  });
});
