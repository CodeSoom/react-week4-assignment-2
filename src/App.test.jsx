import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { getByText, getByPlaceholderText } = render((
    <App />
  ));

  expect(getByText(/Restaurant/)).not.toBeNull();

  expect(getByPlaceholderText(/이름/)).not.toBeNull();
  expect(getByPlaceholderText(/분류/)).not.toBeNull();
  expect(getByPlaceholderText(/주소/)).not.toBeNull();

  expect(getByText(/등록/)).not.toBeNull();
});
