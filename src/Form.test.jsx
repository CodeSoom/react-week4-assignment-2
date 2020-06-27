import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import Form from './Form';

const handleChangeInput = jest.fn();
const handleSubmit = jest.fn();

function renderForm(value) {
  render(<Form
    value={value}
    onChangeInput={handleChangeInput}
    onSubmit={handleSubmit}
  />);
  return {
    nameInput: screen.getByPlaceholderText(/이름/),
    categoryInput: screen.getByPlaceholderText(/분류/),
    addressInput: screen.getByPlaceholderText(/주소/),
    registerButton: screen.getByRole('button', { name: /등록/ }),
  };
}

describe('<Form />', () => {
  context('with input value', () => {
    it('print value on input box', () => {
      // given
      const value = {
        name: '시카고피자',
        category: '양식',
        address: '이태원동',
      };

      // when
      const {
        nameInput, categoryInput, addressInput,
      } = renderForm(value);

      // then
      expect(nameInput.value).toBe(value.name);
      expect(categoryInput.value).toBe(value.category);
      expect(addressInput.value).toBe(value.address);
    });
  });

  context('when submitting restaurant information', () => {
    it('can enter restaurant information', () => {
      // given
      const restaurant = {
        name: '시카고피자',
        category: '양식',
        address: '이태원동',
      };

      // when
      const {
        nameInput, categoryInput, addressInput,
      } = renderForm({ name: '', category: '', address: '' });

      fireEvent.change(nameInput, { target: { value: restaurant.name } });
      fireEvent.change(categoryInput, { target: { value: restaurant.category } });
      fireEvent.change(addressInput, { target: { value: restaurant.address } });

      // then
      expect(handleChangeInput).toBeCalledTimes(3);
      expect(handleChangeInput).toBeCalledWith({ name: 'name', value: restaurant.name });
      expect(handleChangeInput).toBeCalledWith({ name: 'category', value: restaurant.category });
      expect(handleChangeInput).toBeCalledWith({ name: 'address', value: restaurant.address });
    });

    it('can press the submit button', () => {
      // when
      const { registerButton } = renderForm({ name: '시카고피자', category: '양식', address: '이태원동' });
      fireEvent.submit(registerButton);

      // then
      expect(handleSubmit).toBeCalledTimes(1);
    });
  });
});
