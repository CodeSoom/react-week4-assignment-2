import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Form from './Form';

const handleChangeInput = jest.fn();
const handleClickAddRestaurant = jest.fn();

describe('Form', () => {
  it('renders 3 inputs with different placeholder ', () => {
    const inputs = [
      { placehoder: '이름', value: '마녀주방' },
      { placehoder: '분류', value: '한식' },
      { placehoder: '주소', value: '서울시 강남구' },
    ];

    const { getAllByRole, getByPlaceholderText } = render((
      <Form onChangeInput={handleChangeInput} />
    ));

    expect(getAllByRole('textbox')).toHaveLength(3);

    inputs.forEach((input) => {
      expect(getByPlaceholderText(input.placehoder)).not.toBeNull();

      expect(getByPlaceholderText(input.placehoder)).toHaveDisplayValue(input.value);

      fireEvent.change(getByPlaceholderText(input.placehoder),
        { target: { value: '쏘이연남' } });
      });
      
      expect(handleChangeInput).toBeCalledTimes(inputs.length);
  });

  it('renders "등록" button', () => {
    const { container, getByText } = render((
      <Form onClickAddRestautant={handleClickAddRestaurant} />
    ));

    expect(container).toHaveTextContent('등록');

    fireEvent.click(getByText('등록'));

    expect(handleClickAddRestaurant).toBeCalled();
  });
});
