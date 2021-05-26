import { useDispatch } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import DataInput from './DataInput';
import { addRestaurant } from '../redux/actions';

it('renders 등록 button', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  const { getByRole } = render(<DataInput />);
  expect(getByRole('button')).toBeInTheDocument();

  fireEvent.click(getByRole('button', { name: '등록' }));
  expect(dispatch).toBeCalled();
});
