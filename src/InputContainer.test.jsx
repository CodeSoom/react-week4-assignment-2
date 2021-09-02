import { render } from '@testing-library/react';

import InputContainer from './InputContainer';

test('InputContainer', () => {
  const { getByText, getByPlaceholderText } = render((
    <InputContainer />
  ));

  expect(getByText(/등록/)).not.toBeNull();
  expect(getByPlaceholderText(/이름/)).not.toBeNull();
  expect(getByPlaceholderText(/분류/)).not.toBeNull();
  expect(getByPlaceholderText(/주소/)).not.toBeNull();
});
