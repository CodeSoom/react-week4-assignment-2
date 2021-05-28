import { render } from '@testing-library/react';

import Input from '../presentational/Input';

test('<Input />', () => {
  const {
    getByRole,
    getByPlaceholderText,
  } = render(<Input />);

  expect(getByPlaceholderText(/이름/)).toBeInTheDocument();
  expect(getByPlaceholderText(/분류/)).toBeInTheDocument();
  expect(getByPlaceholderText(/주소/)).toBeInTheDocument();
  expect(getByRole('button', { name: '등록' })).toBeInTheDocument();
});
