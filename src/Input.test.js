import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  const handleClick = jest.fn();
  const handleNameChange = jest.fn();
  const handleCategoryChange = jest.fn();
  const handleAddressChange = jest.fn();

  const { getByPlaceholderText, getByText } = render(<Input />);

  expect(getByPlaceholderText(/이름/)).toBeInTheDocument();
  expect(getByPlaceholderText(/분류/)).toBeInTheDocument();
  expect(getByPlaceholderText(/주소/)).toBeInTheDocument();

  expect(getByText(/등록/)).toBeInTheDocument();

  fireEvent.change(getByPlaceholderText(/이름/));

  expect(handleNameChange).toBeCalled();

  fireEvent.change(getByPlaceholderText(/분류/));

  expect(handleCategoryChange).toBeCalled();

  fireEvent.change(getByPlaceholderText(/주소/));

  expect(handleAddressChange).toBeCalled();

  fireEvent.click(getByText(/등록/));

  expect(handleClick).toBeCalled();
});
