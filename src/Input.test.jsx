import React from 'react';

import { render } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  const placeholderText = '이름';

  const { getByRole, getByPlaceholderText } = render((<Input placeholderText={placeholderText} />));

  expect(getByRole('textbox')).not.toBeNull();

  expect(getByPlaceholderText(placeholderText)).not.toBeNull();
});
