import React from 'react';

import { render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  context('without input values', () => {
    it('값이 없는 3개의 input이 보인다.', () => {
      const informations = {
        name: '',
        category: '',
        address: '',
      };

      const { container } = render(
        <Input
          informations={informations}
        />,
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

  context('with input values', () => {
    it('input에 value가 보인다.', () => {
      const informations = {
        name: '한식당',
        category: '한식',
        address: '강남구',
      };

      const { container } = render(
        <Input
          informations={informations}
        />,
      );

      const nameInput = container.querySelector('input[name = name]');
      const categoryInput = container.querySelector('input[name = category]');
      const addressInput = container.querySelector('input[name = address]');

      expect(nameInput.value).toBe(informations.name);
      expect(categoryInput.value).toBe(informations.category);
      expect(addressInput.value).toBe(informations.address);
    });
  });
});
