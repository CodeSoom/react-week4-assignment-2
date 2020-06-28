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
  // given
  const restaurant = {
    name: '시카고피자',
    category: '양식',
    address: '이태원동',
  };
  context('with input value', () => {
    it('print value on input box', () => {
      // when
      const {
        nameInput, categoryInput, addressInput,
      } = renderForm(restaurant);

      // then
      expect(nameInput.value).toBe(restaurant.name);
      expect(categoryInput.value).toBe(restaurant.category);
      expect(addressInput.value).toBe(restaurant.address);
    });
  });

  context('when submitting restaurant information', () => {
    it('can enter restaurant information', () => {
      // when
      const {
        nameInput, categoryInput, addressInput,
      } = renderForm({ name: '', category: '', address: '' });

      fireEvent.change(nameInput, { target: { value: restaurant.name } });
      fireEvent.change(categoryInput, { target: { value: restaurant.category } });
      fireEvent.change(addressInput, { target: { value: restaurant.address } });

      // then
      expect(handleChangeInput).toBeCalledTimes(3);
    });

    it('can press the submit button', () => {
      // when
      const { registerButton } = renderForm(restaurant);
      fireEvent.submit(registerButton);

      // then
      expect(handleSubmit).toBeCalledTimes(1);
    });
  });
});
