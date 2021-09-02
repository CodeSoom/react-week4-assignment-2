import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();
  const { container, getByText, getByLabelText } = render((
    <Input
      value="레스토랑"
      onChange={handleChange}
      onClick={handleClick}
    />
  ));

  expect(container).toHaveTextContent(/이름분류주소/);
  fireEvent.change(getByLabelText('이름'), {
    target: { value: '무언가 하기' },
  });
  fireEvent.change(getByLabelText('분류'), {
    target: { value: '무언가 하기' },
  });
  fireEvent.change(getByLabelText('주소'), {
    target: { value: '무언가 하기' },
  });

  expect(handleChange).toBeCalled();

  fireEvent.click(getByText('등록'));

  expect(handleClick).toBeCalled();
});
