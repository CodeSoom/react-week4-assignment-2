import { fireEvent, render } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  const handleChangeNameValue = jest.fn();
  const handleChangeCategroryValue = jest.fn();
  const handleChangeAddressValue = jest.fn();
  const handleClickSaveData = jest.fn();
  const name = '사가식탁';
  const category = '중식당';
  const address = '성복역 근처';

  const { getByText, getByDisplayValue } = render(
    <Input
      onChanges={{ handleChangeNameValue, handleChangeCategroryValue, handleChangeAddressValue }}
      onClick={handleClickSaveData}
      info={{ name, category, address }}
    />,
  );

  expect(getByDisplayValue(name)).not.toBeNull();
  expect(getByDisplayValue(category)).not.toBeNull();
  expect(getByDisplayValue(address)).not.toBeNull();
  expect(getByText('등록'));

  fireEvent.change(getByDisplayValue(name), { target: { value: '' } });
  expect(handleChangeNameValue).toBeCalled();

  fireEvent.change(getByDisplayValue(category), { target: { value: '' } });
  expect(handleChangeNameValue).toBeCalled();

  fireEvent.change(getByDisplayValue(address), { target: { value: '' } });
  expect(handleChangeNameValue).toBeCalled();
});
