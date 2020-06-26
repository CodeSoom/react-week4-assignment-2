import React from 'react';

import { render } from '@testing-library/react';

import InputContainer from './InputContainer';

describe('InputContainer', () => {
  context('without values', () => {
    it('3개의 input이 보입니다.', () => {
      const { container } = render(
        <InputContainer />,
      );

      const nameInput = container.querySelector('input[name = name]');
      const categoryInput = container.querySelector('input[name = category]');
      const addressInput = container.querySelector('input[name = address]');

      expect(nameInput).not.toBeNull();
      expect(categoryInput).not.toBeNull();
      expect(addressInput).not.toBeNull();
    });
  });
});
