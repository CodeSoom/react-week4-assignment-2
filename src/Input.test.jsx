import React from 'react';

import { render } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  const { getByRole } = render((<Input />));

  expect(getByRole('textbox')).not.toBeNull();
});
