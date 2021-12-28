import { fireEvent, render } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  const onChanges = jest.fn();
  const handleClickSaveData = jest.fn();
  const name = '사가식탁';
  const category = '중식당';
  const address = '성복역 근처';

  const { getByText, getByDisplayValue } = render(
    <Input
      onChanges={onChanges}
      onClick={handleClickSaveData}
      info={{ name, category, address }}
    />,
  );

  expect(getByDisplayValue(name)).not.toBeNull();
  expect(getByDisplayValue(category)).not.toBeNull();
  expect(getByDisplayValue(address)).not.toBeNull();
  expect(getByText('등록'));

  fireEvent.change(getByDisplayValue(name), { target: { value: '' } });
  expect(onChanges).toBeCalled();

  fireEvent.change(getByDisplayValue(category), { target: { value: '' } });
  expect(onChanges).toBeCalled();

  fireEvent.change(getByDisplayValue(address), { target: { value: '' } });
  expect(onChanges).toBeCalled();
});
