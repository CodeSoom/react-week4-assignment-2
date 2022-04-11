import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const handleChangeName = jest.fn();
  const handleChangeCategory = jest.fn();
  const handleChangeAddress = jest.fn();
  const handleClick = jest.fn();

  const { queryByDisplayValue, getByText, getByPlaceholderText } = render((
    <Input
      value={{ name: '기존 레스토랑', category: '기존 분류', address: '기존 주소' }}
      onChangeName={handleChangeName}
      onChangeCategory={handleChangeCategory}
      onChangeAddress={handleChangeAddress}
      onClick={handleClick}
    />
  ));

  expect(queryByDisplayValue('기존 레스토랑')).not.toBeNull();
  expect(queryByDisplayValue('기존 분류')).not.toBeNull();
  expect(queryByDisplayValue('기존 주소')).not.toBeNull();

  fireEvent.change(getByPlaceholderText('이름'), {
    target: { value: '더조은 참치' },
  });

  expect(handleChangeName).toBeCalled();

  fireEvent.change(getByPlaceholderText('분류'), {
    target: { value: '일식' },
  });

  expect(handleChangeCategory).toBeCalled();

  fireEvent.change(getByPlaceholderText('주소'), {
    target: { value: '압구정' },
  });

  expect(handleChangeAddress).toBeCalled();

  fireEvent.click(getByText('등록'));

  expect(handleClick).toBeCalled();
});
