import React from 'react';

import { render } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  const placeholderText = '이름';
  const value = '마녀주방';

  const { getByRole, getByPlaceholderText } = render((
    <Input
      placeholderText={placeholderText}
      value={value}
    />
  ));

  expect(getByRole('textbox')).not.toBeNull();

  expect(getByPlaceholderText(placeholderText)).toHaveDisplayValue(value);
});
