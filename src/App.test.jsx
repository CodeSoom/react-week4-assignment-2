import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

useSelector.mockImplementation((selector) => selector({
  restaurants: [],
}));

it('renders header', () => {
  const { container } = render(<App />);
  expect(container).toHaveTextContent('Restaurants');
});

it('renders three inputbox', () => {
  const { getAllByRole } = render(<App />);
  expect(getAllByRole('textbox')).toHaveLength(3);
});

it('renders 등록 button', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  const { getByRole } = render(<App />);
  expect(getByRole('button')).toBeInTheDocument();

  userEvent.click(getByRole('button'));
  expect(dispatch).toBeCalled();
});
