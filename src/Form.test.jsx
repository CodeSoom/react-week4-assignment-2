import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Form from './Form';

const handleChangeInput = jest.fn();
const handleClickAddRestaurant = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Form', () => {
  function renderForm() {
    return render((
      <Form
        onChangeInput={handleChangeInput}
        onClickAddRestautant={handleClickAddRestaurant}
      />
    ));
  }

  it('renders 3 inputs with different placeholder ', () => {
    const inputs = [
      { placeholder: '이름', value: '마녀주방' },
      { placeholder: '분류', value: '한식' },
      { placeholder: '주소', value: '서울시 강남구' },
    ];

    const { getAllByRole, getByPlaceholderText } = renderForm();

    expect(getAllByRole('textbox')).toHaveLength(inputs.length);

    inputs.forEach(({ placeholder, value }) => {
      expect(getByPlaceholderText(placeholder)).not.toBeNull();

      expect(getByPlaceholderText(placeholder)).toHaveDisplayValue(value);

      fireEvent.change(getByPlaceholderText(placeholder),
        { target: { value: '쏘이연남' } });
    });

    expect(handleChangeInput).toBeCalledTimes(inputs.length);
  });

  it('renders "등록" button', () => {
    const { container, getByText } = renderForm();

    expect(container).toHaveTextContent('등록');

    fireEvent.click(getByText('등록'));

    expect(handleClickAddRestaurant).toBeCalled();
  });
});
