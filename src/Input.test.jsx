import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  context('with input values', () => {
    it('input에 value가 보인다.', () => {
      const restaurant = {
        name: '한식당',
        category: '한식',
        address: '강남구',
      };

      const handleChangeRestaurant = jest.fn();
      const handleClick = jest.fn();

      const { getByDisplayValue } = render(
        <Input
          restaurant={restaurant}
          onChange={handleChangeRestaurant}
          handleClick={handleClick}
        />,
      );

      expect(getByDisplayValue('한식당')).not.toBeNull();
      expect(getByDisplayValue('한식')).not.toBeNull();
      expect(getByDisplayValue('강남구')).not.toBeNull();
    });
  });

  context('when input change', () => {
    it('handleChangeRestaurant 함수가 실행된다.', () => {
      const restaurant = {
        name: '',
        category: '',
        address: '',
      };

      const handleChangeRestaurant = jest.fn();
      const handleClick = jest.fn();

      const { getByRole } = render(
        <Input
          restaurant={restaurant}
          onChange={handleChangeRestaurant}
          handleClick={handleClick}
        />,
      );

      const nameInput = getByRole('textbox', { name: 'name' });
      const categoryInput = getByRole('textbox', { name: 'category' });
      const addressInput = getByRole('textbox', { name: 'address' });

      fireEvent.change(nameInput, { target: { value: '한식당' } });

      expect(handleChangeRestaurant).toBeCalled();

      fireEvent.change(categoryInput, { target: { value: '한식' } });

      expect(handleChangeRestaurant).toBeCalled();

      fireEvent.change(addressInput, { target: { value: '강남구' } });

      expect(handleChangeRestaurant).toBeCalled();
    });
  });

  context('when click 등록', () => {
    it('handleClick 함수가 실행된다.', () => {
      const restaurant = {
        name: '',
        category: '',
        address: '',
      };

      const handleChangeRestaurant = jest.fn();
      const handleClick = jest.fn();

      const { getByText } = render(
        <Input
          restaurant={restaurant}
          onChange={handleChangeRestaurant}
          onClick={handleClick}
        />,
      );

      fireEvent.click(getByText('등록'));

      expect(handleClick).toBeCalled();
    });
  });
});
