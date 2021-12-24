import { render, fireEvent } from '@testing-library/react';

import FormContainer from './FormContainer';

test('FormContainer', () => {
  const { getByText } = render((
    <FormContainer />
  ));

  expect(getByText(/등록/)).not.toBeNull();

  fireEvent.click(getByText(/등록/));
});
