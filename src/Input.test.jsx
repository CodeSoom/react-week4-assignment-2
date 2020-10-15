import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('<Input />', () => {
  const handleChange = jest.fn();

  const renderInput = () => render((
    <Input
      placeholder="이름"
      onChange={handleChange}
    />
  ));

  describe('renders', () => {
    it('placeholder', () => {
      // When
      const { getByPlaceholderText } = renderInput();

      // Then
      expect(getByPlaceholderText('이름')).toBeInTheDocument();
    });
  });

  describe('onChange', () => {
    it('calls onChange callback', () => {
      // Given
      const { getByPlaceholderText } = renderInput();

      // When
      fireEvent.change(getByPlaceholderText('이름'), {
        target: { value: '한식' },
      });

      // Then
      expect(handleChange).toHaveBeenCalled();
    });
  });
});
