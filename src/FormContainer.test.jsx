import React from 'react';

import { render } from '@testing-library/react';

import FormContainer from './FormContainer';

test('FormContainer', () => {
  const { container, getAllByRole } = render((
    <FormContainer />
  ));

  expect(getAllByRole('textbox')).not.toBeNull();
  expect(container).toHaveTextContent('등록');
});
