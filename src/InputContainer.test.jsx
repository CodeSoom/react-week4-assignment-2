import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const informations = {
    name: '한식당',
    category: '한식',
    address: '강남구',
  };

  useSelector.mockImplementation((selector) => selector({
    informations,
  }));

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

  context('with values', () => {
    it('informations의 값이 보입니다.', () => {
      const { container } = render(
        <InputContainer />,
      );

      const nameInput = container.querySelector('input[name = name]');
      const categoryInput = container.querySelector('input[name = category]');
      const addressInput = container.querySelector('input[name = address]');

      expect(nameInput.value).toBe('한식당');
      expect(categoryInput.value).toBe('한식');
      expect(addressInput.value).toBe('강남구');
    });
  });
});
