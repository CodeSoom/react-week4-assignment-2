import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('<InputContainer />', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      name: '',
      category: '',
      address: '',
    },
  }));

  const renderInput = () => render((
    <InputContainer />
  ));

  it('renders 3 inputs', () => {
    // When
    const { getAllByRole } = renderInput();

    // Then
    expect(getAllByRole('textbox')).toHaveLength(3);
  });

  it('renders 등록 button', () => {
    // When
    const { getByText } = renderInput();

    // Then
    expect(getByText('등록')).toBeInTheDocument();
  });

  it('listens 등록 button click event', () => {
    // Given
    const { getByText } = renderInput();

    // When
    fireEvent.click(getByText('등록'));

    // Then
    expect(dispatch).toBeCalled();
  });

  it('listens input change event', () => {
    // Given
    const { getByPlaceholderText } = renderInput();

    // When
    userEvent.type(getByPlaceholderText('분류'), 'korean');

    // Then
    expect(dispatch).toHaveBeenCalledTimes(6);
  });
});
