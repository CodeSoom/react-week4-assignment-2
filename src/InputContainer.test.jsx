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
    name: '',
    category: '',
    address: '',
  }));

  const renderInput = () => render((
    <InputContainer />
  ));

  describe('renders', () => {
    it('3 inputs', () => {
      // When
      const { getAllByRole } = renderInput();

      // Then
      expect(getAllByRole('textbox')).toHaveLength(3);
    });

    it('등록 button', () => {
      // When
      const { getByText } = renderInput();

      // Then
      expect(getByText('등록')).toBeInTheDocument();
    });
  });

  describe('events', () => {
    it('calls dispatch on click 등록 button', () => {
      // Given
      const { getByText } = renderInput();

      // When
      fireEvent.click(getByText('등록'));

      // Then
      expect(dispatch).toBeCalled();
    });

    it('calls dispatch on typing in the input', () => {
      // Given
      const { getByPlaceholderText } = renderInput();

      // When
      userEvent.type(getByPlaceholderText('분류'), 'korean');

      // Then
      expect(dispatch).toHaveBeenCalledTimes(6);
    });
  });
});
