import React from 'react';

import { render } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  const { getByPlaceholderText, getByText } = render((
    <Input />
  ));

  expect(getByPlaceholderText(/이름/)).not.toBeNull();
  expect(getByPlaceholderText(/분류/)).not.toBeNull();
  expect(getByPlaceholderText(/주소/)).not.toBeNull();

  expect(getByText(/등록/)).not.toBeNull();
});
