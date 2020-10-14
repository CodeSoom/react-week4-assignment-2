import React from 'react';

import { render } from '@testing-library/react';

import Form from './Form';

test('Form', () => {
  const { getAllByRole } = render((
    <Form />
  ));

  expect(getAllByRole('textbox')).toHaveLength(3);
});
