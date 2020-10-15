import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('<InputContainer />', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

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
      fireEvent.change(getByPlaceholderText('분류'), {
        target: { value: '사용자 입력' },
      });

      // Then
      expect(dispatch).toBeCalled();
    });
  });
});
