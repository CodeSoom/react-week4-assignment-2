import { fireEvent, render } from '@testing-library/react';

describe('Input', () => {
  const handleChange = jest.fn();

  const { getByDisplayValue, getByLabelText } = render((
    <Input
      value="치킨"
      onChange={handleChange}
    />
  ));

  expect(getByDisplayValue('치킨')).not.toBeNull();

  fireEvent.change(getByLabelText('메뉴1'), {
    target: { value: '피자' },
  });

  expect(handleChange).toBeCalled();
});
