import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Form from './Form';

const handleChangeInput = jest.fn();
const handleClickAddRestaurant = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Form', () => {
  const inputs = [
    { name: 'name', placeholder: '이름', value: '마녀주방' },
    { name: 'category', placeholder: '분류', value: '한식' },
    { name: 'address', placeholder: '주소', value: '서울시 강남구' },
  ];

  function renderForm() {
    return render((
      <Form
        inputs={inputs}
        onChangeInput={handleChangeInput}
        onClickAddRestautant={handleClickAddRestaurant}
      />
    ));
  }

  it('renders 3 inputs with different placeholder and name attirbute', () => {
    const { getAllByRole, getByPlaceholderText } = renderForm();

    expect(getAllByRole('textbox')).toHaveLength(inputs.length);

    inputs.forEach(({name, placeholder, value }) => {
      const input = getByPlaceholderText(placeholder);

      expect(input).toHaveDisplayValue(value);
      expect(input).toHaveAttribute('name', name);

      fireEvent.change(input,
        { target: { value: '쏘이연남' } });
    });

    expect(handleChangeInput).toBeCalledTimes(inputs.length);
  });

  it('renders add restaurant button', () => {
    const { container, getByText } = renderForm();

    expect(container).toHaveTextContent('등록');

    fireEvent.click(getByText('등록'));

    expect(handleClickAddRestaurant).toBeCalled();
  });
});
