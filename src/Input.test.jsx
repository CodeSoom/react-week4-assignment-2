import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const restaurant = {
    name: '마녀주방',
    category: '한식',
    address: '서울시 강남구',
  };

  const renderInput = () => render(<Input
    restaurant={restaurant}
    onChange={handleChange}
    onClick={handleClick}
  />);

  context('renders', () => {
    it('placholder text', () => {
      const { getByPlaceholderText } = renderInput();

      expect(getByPlaceholderText('이름')).not.toBeNull();
      expect(getByPlaceholderText('분류')).not.toBeNull();
      expect(getByPlaceholderText('주소')).not.toBeNull();
    });
  });

  context('with restaurant', () => {
    it('renders name, category and address', () => {
      const { getByPlaceholderText } = renderInput();

      const { name, category, address } = restaurant;

      expect(getByPlaceholderText('이름')).toHaveDisplayValue(name);
      expect(getByPlaceholderText('분류')).toHaveDisplayValue(category);
      expect(getByPlaceholderText('주소')).toHaveDisplayValue(address);
    });
  });

  context('changing restaurant', () => {
    it('called with handleChange', () => {
      const { getByPlaceholderText } = renderInput();

      fireEvent.change(getByPlaceholderText('이름'), {
        target: { value: '시카고피자' },
      });

      fireEvent.change(getByPlaceholderText('분류'), {
        target: { value: '양식' },
      });

      fireEvent.change(getByPlaceholderText('주소'), {
        target: { value: '이태원동' },
      });

      expect(handleChange).toBeCalledTimes(3);
    });
  });

  context('when add button is clicked', () => {
    it('called with handleClick', () => {
      const { getByText } = renderInput();

      expect(handleClick).not.toBeCalled();

      fireEvent.click(getByText('등록'));

      expect(handleClick).toBeCalled();
    });
  });
});
