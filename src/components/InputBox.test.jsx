import { fireEvent, render } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import InputBox from './InputBox';
import { updateField } from '../redux/actions';

jest.mock('react-redux');
it('renders input control with given name', () => {
  const { getByRole } = render(<InputBox name="이름" />);
  expect(getByRole('textbox', { lable: '이름' })).toBeInTheDocument();
});

it.each([
  ['name', '마녀주방'],
  ['category', '한식'],
  ['address', '서울시 강남구'],
])('updates %s field onblur', (field, value) => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  const { getByPlaceholderText } = render(<InputBox name={field} />);

  const box = getByPlaceholderText(field);

  box.focus();
  fireEvent.change(box, { target: { value } });
  box.blur();

  expect(dispatch).toBeCalledWith(updateField({ field, value }));
});
