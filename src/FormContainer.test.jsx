import React from 'react';

import { render } from '@testing-library/react';

import FormContainer from './FormContainer';

test('FormContainer', () => {
  const { getAllByRole } = render((
    <FormContainer />
  ));

  expect(getAllByRole('textbox')).not.toBeNull();
});
