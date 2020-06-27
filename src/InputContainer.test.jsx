import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const informations = {
    name: '한식당',
    category: '한식',
    address: '강남구',
  };

  useSelector.mockImplementation((selector) => selector({
    informations,
  }));

  context('without values', () => {
    it('3개의 input이 보입니다.', () => {
      const { container } = render(
        <InputContainer />,
      );

      const nameInput = container.querySelector('input[name = name]');
      const categoryInput = container.querySelector('input[name = category]');
      const addressInput = container.querySelector('input[name = address]');

      expect(nameInput).not.toBeNull();
      expect(categoryInput).not.toBeNull();
      expect(addressInput).not.toBeNull();
    });
  });

  context('with values', () => {
    it('informations의 값이 보입니다.', () => {
      const { container } = render(
        <InputContainer />,
      );

      const nameInput = container.querySelector('input[name = name]');
      const categoryInput = container.querySelector('input[name = category]');
      const addressInput = container.querySelector('input[name = address]');

      expect(nameInput.value).toBe('한식당');
      expect(categoryInput.value).toBe('한식');
      expect(addressInput.value).toBe('강남구');
    });
  });

  context('when change values', () => {
    it('name input이 변경되면 dispatch가 실행됩니다.', () => {
      const { container } = render(
        <InputContainer />,
      );

      const nameInput = container.querySelector('input[name = name]');

      fireEvent.change(nameInput, { target: { value: '마녀식당' } });

      expect(dispatch).toBeCalled();
    });

    it('category input이 변경되면 dispatch가 실행됩니다.', () => {
      const { container } = render(
        <InputContainer />,
      );

      const categoryInput = container.querySelector('input[name = category]');

      fireEvent.change(categoryInput, { target: { value: '중식' } });

      expect(dispatch).toBeCalled();
    });

    it('name input이 변경되면 dispatch가 실행됩니다.', () => {
      const { container } = render(
        <InputContainer />,
      );

      const nameInput = container.querySelector('input[name = name]');

      fireEvent.change(nameInput, { target: { value: '마녀식당' } });

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
