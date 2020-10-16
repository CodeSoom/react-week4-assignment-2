import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      name: '한식이 좋아!',
      category: '한식',
      address: '서울시 강남구',
    },
  }));

  context('with restaurant information', () => {
    it('renders name, category, address', () => {
      const { getByDisplayValue } = render(<InputContainer />);

      expect(getByDisplayValue('한식이 좋아!')).not.toBeNull();
      expect(getByDisplayValue('한식')).not.toBeNull();
      expect(getByDisplayValue('서울시 강남구')).not.toBeNull();
    });
  });
});
