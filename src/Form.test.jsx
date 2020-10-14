import React from 'react';

import { render } from '@testing-library/react';

import Form from './Form';

test('Form', () => {
  const { getByRole } = render((
    <Form />
  ));

  expect(getByRole('textbox')).not.toBeNull();
});
