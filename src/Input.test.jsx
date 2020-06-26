import React from 'react';

import { render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  context('without input values', () => {
    it('값이 없는 3개의 input이 보인다.', () => {
      const { container } = render(
        <Input />,
      );

      const nameInput = container.querySelector('input[name = name]');
      const categoryInput = container.querySelector('input[name = category]');
      const addressInput = container.querySelector('input[name = address]');

      expect(nameInput).not.toBeNull();
      expect(categoryInput).not.toBeNull();
      expect(addressInput).not.toBeNull();

      expect(nameInput.value).toBe('');
      expect(categoryInput.value).toBe('');
      expect(addressInput.value).toBe('');
    });
  });
});
