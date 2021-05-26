import { fireEvent, render } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import InputBox from './InputBox';

jest.mock('react-redux');
it('renders input control with given name', () => {
  const { getByRole } = render(<InputBox name="이름" />);
  expect(getByRole('textbox', { lable: '이름' })).toBeInTheDocument();
});

it.each([
  ['이름', '마녀주방'],
  ['분류', '한식'],
  ['주소', '서울시 강남구'],
])('updates data field onblur', (field, value) => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  const { getByRole } = render(<InputBox name={field} />);

  const box = getByRole('textbox', { name: field });

  box.focus();
  fireEvent.change(box, { target: { value } });
  box.blur();

  expect(dispatch).toBeCalledWith(value);
});
