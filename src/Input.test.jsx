import React from 'react';

import { render } from '@testing-library/react';

import Input from './Input';

describe('<Input />', () => {
  describe('renders', () => {
    const renderInput = ({ placeholder }) => render((
      <Input placeholder={placeholder} />
    ));

    it('placeholder', () => {
      // When
      const { getByPlaceholderText } = renderInput({ placeholder: '이름' });

      // Then
      expect(getByPlaceholderText('이름')).toBeInTheDocument();
    });
  });
});
