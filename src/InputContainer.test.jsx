import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const restaurant = {
    name: '한식당',
    category: '한식',
    address: '강남구',
  };

  useSelector.mockImplementation((selector) => selector({
    restaurant,
  }));

  context('without values', () => {
    it('3개의 input이 보입니다.', () => {
      const { getAllByRole } = render(
        <InputContainer />,
      );

      const Inputs = getAllByRole('textbox');

      Inputs.forEach((Input) => {
        expect(Input).not.toBeNull();
      });
    });
  });

  context('with values', () => {
    it('restaurant의 이름, 구분, 주소값이 보인다.', () => {
      const { getByDisplayValue } = render(
        <InputContainer />,
      );

      expect(getByDisplayValue('한식당')).not.toBeNull();
      expect(getByDisplayValue('한식')).not.toBeNull();
      expect(getByDisplayValue('강남구')).not.toBeNull();
    });
  });

  context('when change values', () => {
    it('name input이 변경되면 dispatch가 실행됩니다.', () => {
      const { getByRole } = render(
        <InputContainer />,
      );

      const nameInput = getByRole('textbox', { name: 'name' });

      fireEvent.change(nameInput, { target: { value: '마녀식당' } });

      expect(dispatch).toBeCalled();
    });

    it('category input이 변경되면 dispatch가 실행됩니다.', () => {
      const { getByRole } = render(
        <InputContainer />,
      );

      const categoryInput = getByRole('textbox', { name: 'category' });

      fireEvent.change(categoryInput, { target: { value: '중식' } });

      expect(dispatch).toBeCalled();
    });

    it('name input이 변경되면 dispatch가 실행됩니다.', () => {
      const { getByRole } = render(
        <InputContainer />,
      );

      const addressInput = getByRole('textbox', { name: 'address' });

      fireEvent.change(addressInput, { target: { value: '마녀식당' } });

      expect(dispatch).toBeCalled();
    });
  });

  context('when click 등록', () => {
    it('disaptch가 호출된다.', () => {
      const { getByText } = render(
        <InputContainer />,
      );

      fireEvent.click(getByText('등록'));

      expect(dispatch).toBeCalled();
    });
  });
});
