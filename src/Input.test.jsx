import React from 'react';

import { render } from '@testing-library/react';

import Input from './Input';

describe('<Input />', () => {
  const renderInput = () => render((
    <Input placeholder="이름" />
  ));

  describe('renders', () => {
    it('placeholder', () => {
      // When
      const { getByPlaceholderText } = renderInput();

      // Then
      expect(getByPlaceholderText('이름')).toBeInTheDocument();
    });
  });
});
