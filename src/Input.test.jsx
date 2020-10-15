import React from 'react';

import { render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const renderInput = () => render(<Input />);

  context('renders', () => {
    it('placholder text', () => {
      const { getByPlaceholderText } = renderInput();

      expect(getByPlaceholderText('이름')).not.toBeNull();
      expect(getByPlaceholderText('분류')).not.toBeNull();
      expect(getByPlaceholderText('주소')).not.toBeNull();
    });
  });
});
