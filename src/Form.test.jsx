import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Form from './Form';

test('Form', () => {
  const restaurant = {
    name: '마녀주방',
    classification: '한식',
    location: '서울시 강남구',
  };

  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const { getByDisplayValue, getByPlaceholderText, getByText } = render((
    <Form
      restaurant={restaurant}
      onChange={handleChange}
      onClick={handleClick}
    />
  ));

  expect(getByDisplayValue('마녀주방')).not.toBeNull();
  expect(getByDisplayValue('한식')).not.toBeNull();
  expect(getByDisplayValue('서울시 강남구')).not.toBeNull();

  fireEvent.change(getByPlaceholderText('이름'), {
    target: { value: '파스타' },
  });

  fireEvent.change(getByPlaceholderText('분류'), {
    target: { value: '양식' },
  });

  fireEvent.change(getByPlaceholderText('주소'), {
    target: { value: '강남' },
  });

  expect(handleChange).toBeCalledTimes(3);

  fireEvent.click(getByText('등록'));

  expect(handleClick).toBeCalled();
});
