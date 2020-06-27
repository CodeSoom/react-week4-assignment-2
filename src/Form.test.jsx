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
  const inputValue = {
    name: '시카고피자',
    category: '양식',
    address: '이태원동',
  };
  context('with input value', () => {
    it('print value on input box', () => {
      // when
      const {
        nameInput, categoryInput, addressInput,
      } = renderForm(inputValue);

      // then
      expect(nameInput.value).toBe(inputValue.name);
      expect(categoryInput.value).toBe(inputValue.category);
      expect(addressInput.value).toBe(inputValue.address);
    });
  });

  context('when submitting restaurant information', () => {
    it('can enter restaurant information', () => {
      // when
      const {
        nameInput, categoryInput, addressInput,
      } = renderForm({ name: '', category: '', address: '' });

      fireEvent.change(nameInput, { target: { value: inputValue.name } });
      fireEvent.change(categoryInput, { target: { value: inputValue.category } });
      fireEvent.change(addressInput, { target: { value: inputValue.address } });

      // then
      expect(handleChangeInput).toBeCalledTimes(3);
      expect(handleChangeInput).toBeCalledWith({ name: 'name', value: inputValue.name });
      expect(handleChangeInput).toBeCalledWith({ name: 'category', value: inputValue.category });
      expect(handleChangeInput).toBeCalledWith({ name: 'address', value: inputValue.address });
    });

    it('can press the submit button', () => {
      // when
      const { registerButton } = renderForm(inputValue);
      fireEvent.submit(registerButton);

      // then
      expect(handleSubmit).toBeCalledTimes(1);
    });
  });
});
