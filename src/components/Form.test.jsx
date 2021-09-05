import { fireEvent, render } from '@testing-library/react';

import restaurants from '../../__mocks__/restaurants';

import Form from './Form';

test('Form', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const { getByLabelText, getByText, getByDisplayValue } = render((
    <Form
      restaurant={restaurants[0]}
      onChange={handleChange}
      onClick={handleClick}
    />));

  expect(getByDisplayValue('마녀주방')).not.toBeNull();
  expect(getByDisplayValue('한식')).not.toBeNull();
  expect(getByDisplayValue('서울시 강남구')).not.toBeNull();

  fireEvent.change(getByLabelText('분류'), { target: { value: '양식' } });
  expect(handleChange).toBeCalledWith({
    name: 'category',
    value: '양식',
  });

  fireEvent.click(getByText('등록'));
  expect(handleClick).toBeCalled();
});
