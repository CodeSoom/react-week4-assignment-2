import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Form from './Form';

test('Input', () => {
  const restaurant = {
    name: '마녀주방',
    classification: '한식',
    location: '서울시 강남구',
  };

  const placeholders = ['이름', '분류', '주소'];

  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const { getByDisplayValue, getByPlaceholderText, getByText } = render((
    <Form
      placeholders={placeholders}
      restaurant={restaurant}
      onChange={handleChange}
      onClick={handleClick}
    />
  ));

  expect(getByDisplayValue('마녀주방')).not.toBeNull();
  expect(getByDisplayValue('한식')).not.toBeNull();
  expect(getByDisplayValue('서울시 강남구')).not.toBeNull();

  placeholders.forEach((placeholder) => {
    fireEvent.change(getByPlaceholderText(placeholder), {
      target: { value: placeholder },
    });

    expect(handleChange).toBeCalled();
  });

  fireEvent.click(getByText('등록'));

  expect(handleClick).toBeCalled();
});
