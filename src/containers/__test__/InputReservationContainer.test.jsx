import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';

import InputReservationContainer from '../InputReservationContainer';

jest.mock('react-redux');

test('InputReservationContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    reservation: {
      name: '',
      category: '',
      address: '',
    },
  }));

  render(<InputReservationContainer />);

  const { getByPlaceholderText, getByRole } = screen;

  fireEvent.change(getByPlaceholderText('이름'), { target: { value: 'New Name' } });
  fireEvent.change(getByPlaceholderText('분류'), { target: { value: 'New Category' } });
  fireEvent.change(getByPlaceholderText('주소'), { target: { value: 'New Address' } });

  fireEvent.click(getByRole('button', { name: '등록' }));

  expect(dispatch).toBeCalledWith({
    type: 'addReservation',
  });
});
