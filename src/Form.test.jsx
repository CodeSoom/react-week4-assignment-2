import React from 'react';

import { render } from '@testing-library/react';

import Form from './Form';

test('Form', () => {
  const inputs = [
    { placehoder: '이름' },
    { placehoder: '분류' },
    { placehoder: '주소' },
  ];
  const { getAllByRole, getByPlaceholderText } = render((
    <Form />
  ));

  expect(getAllByRole('textbox')).toHaveLength(3);

  inputs.forEach((input) => {
    expect(getByPlaceholderText(input.placehoder)).not.toBeNull();
  });
});
