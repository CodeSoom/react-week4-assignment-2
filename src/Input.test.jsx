import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  const restaurant = {
    name: '초기 이름',
    category: '초기 분류',
    address: '초기 주소',
  };
  const handleChangeName = jest.fn();
  const handleChangeCategory = jest.fn();
  const handleChangeAddress = jest.fn();
  const handleClick = jest.fn();

  const { getByDisplayValue, getByPlaceholderText, getByText } = render(
    <Input
      value={restaurant}
      onChangeName={handleChangeName}
      onChangeCategory={handleChangeCategory}
      onChangeAddress={handleChangeAddress}
      onClick={handleClick}
    />,
  );

  expect(getByDisplayValue('초기 이름')).not.toBeNull();
  expect(getByDisplayValue('초기 분류')).not.toBeNull();
  expect(getByDisplayValue('초기 주소')).not.toBeNull();

  fireEvent.change(
    getByPlaceholderText('이름'),
    { target: { value: '황궁쟁반짜장' } },
  );

  expect(handleChangeName).toBeCalled();

  fireEvent.change(
    getByPlaceholderText('분류'),
    { target: { value: '중식' } },
  );

  expect(handleChangeCategory).toBeCalled();

  fireEvent.change(
    getByPlaceholderText('주소'),
    { target: { value: '서울시 서초구' } },
  );

  expect(handleChangeAddress).toBeCalled();

  fireEvent.click(getByText('등록'));

  expect(handleClick).toBeCalled();
});
