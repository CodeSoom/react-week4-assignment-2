import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';

import InputReservationContainer from '../InputReservationContainer';

jest.mock('react-redux');

test('InputReservationContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    reservationName: '',
    reservationCategory: '',
    reservationAddress: '',
  }));

  render(<InputReservationContainer />);

  const { getByPlaceholderText, getByRole } = screen;
  const reservationNameInput = getByPlaceholderText('이름');
  const reservationCategoryInput = getByPlaceholderText('분류');
  const reservationAddressInput = getByPlaceholderText('주소');
  const reservationAddButton = getByRole('button', { name: '등록' });

  fireEvent.change(reservationNameInput, { target: { value: 'New Name' } });
  fireEvent.change(reservationCategoryInput, { target: { value: 'New Category' } });
  fireEvent.change(reservationAddressInput, { target: { value: 'New Address' } });

  fireEvent.click(reservationAddButton);

  expect(dispatch).toBeCalledWith({
    type: 'addReservation',
  });
});
