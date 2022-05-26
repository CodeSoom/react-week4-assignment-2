import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  const handleClick = jest.fn();
  const handleNameChange = jest.fn();
  const handleCategoryChange = jest.fn();
  const handleAddressChange = jest.fn();

  const { getByPlaceholderText, getByText, getByDisplayValue } = render((
    <Input
      name="마녀주방"
      category="한식"
      address="서울시 강남구"
      onNameChange={handleNameChange}
      onCategoryChange={handleCategoryChange}
      onAddressChange={handleAddressChange}
    />
  ));

  expect(getByPlaceholderText(/이름/)).toBeInTheDocument();
  expect(getByPlaceholderText(/분류/)).toBeInTheDocument();
  expect(getByPlaceholderText(/주소/)).toBeInTheDocument();

  expect(getByDisplayValue(/마녀주방/)).toBeInTheDocument();
  expect(getByDisplayValue(/한식/)).toBeInTheDocument();
  expect(getByDisplayValue(/서울시 강남구/)).toBeInTheDocument();

  fireEvent.change(getByPlaceholderText(/이름/), { target: { value: '시카고 피자' } });

  expect(handleNameChange).toBeCalled();

  fireEvent.change(getByPlaceholderText(/분류/), { target: { value: '양식' } });

  expect(handleCategoryChange).toBeCalled();

  fireEvent.change(getByPlaceholderText(/주소/), { target: { value: '이태원' } });

  expect(handleAddressChange).toBeCalled();

  expect(getByText(/등록/)).toBeInTheDocument();

  fireEvent.click(getByText(/등록/));

  expect(handleClick).toBeCalled();
});
