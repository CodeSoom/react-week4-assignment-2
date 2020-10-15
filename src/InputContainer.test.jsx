import React from 'react';

import { render } from '@testing-library/react';

import InputContainer from './InputContainer';

describe('<InputContainer />', () => {
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
});
