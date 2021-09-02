import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  const handleChangeName = jest.fn();
  const handleChangeCategory = jest.fn();
  const handleChangeAddress = jest.fn();
  const handleAddRestaurant = jest.fn();

  const { nameText, categoryText, addressText } = {
    nameText: '성원각',
    categoryText: '중식',
    addressText: '서울시 동작구',
  };

  const { getByText, getByPlaceholderText } = render((
    <Input
      nameText={nameText}
      categoryText={categoryText}
      addressText={addressText}
      onChangeName={handleChangeName}
      onChangeCategory={handleChangeCategory}
      onChangeAddress={handleChangeAddress}
      onClick={handleAddRestaurant}
    />
  ));

  expect(getByText(/등록/)).not.toBeNull();
  expect(getByPlaceholderText(/이름/)).toHaveDisplayValue(/성원각/);
  expect(getByPlaceholderText(/분류/)).toHaveDisplayValue(/중식/);
  expect(getByPlaceholderText(/주소/)).toHaveDisplayValue(/서울시 동작구/);

  fireEvent.change(getByPlaceholderText(/이름/), {
    target: { value: '시골순두부' },
  });

  expect(handleChangeName).toBeCalled();

  fireEvent.change(getByPlaceholderText(/분류/), {
    target: { value: '한식' },
  });

  expect(handleChangeCategory).toBeCalled();

  fireEvent.change(getByPlaceholderText(/주소/), {
    target: { value: '인천시 계양구' },
  });

  expect(handleChangeAddress).toBeCalled();

  fireEvent.click(getByText(/등록/));

  expect(handleAddRestaurant).toBeCalled();
});
