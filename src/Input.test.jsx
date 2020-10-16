import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const handleChangeName = jest.fn();
  const handleChangeCategory = jest.fn();
  const handleChangeAddress = jest.fn();
  const handleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const restaurant = {
    name: '한식이 좋아!',
    category: '한식',
    address: '서울시 강남구',
  };

  const renderInput = () => render(<Input
    restaurant={restaurant}
    onChangeName={handleChangeName}
    onChangeCategory={handleChangeCategory}
    onChangeAddress={handleChangeAddress}
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

  context('with restaurant info', () => {
    it('renders name, category, address', () => {
      const { getByPlaceholderText } = renderInput();

      const { name, category, address } = restaurant;

      expect(getByPlaceholderText('이름')).toHaveDisplayValue(name);
      expect(getByPlaceholderText('분류')).toHaveDisplayValue(category);
      expect(getByPlaceholderText('주소')).toHaveDisplayValue(address);
    });
  });

  context('when restaurant info is changed', () => {
    const newRestaurant = {
      name: '중식이 좋아!',
      category: '중식',
      address: '경기도 분당구',
    };

    const { name, category, address } = newRestaurant;

    it('called with handleChangeName', () => {
      const { getByPlaceholderText } = renderInput();

      fireEvent.change(getByPlaceholderText('이름'), {
        target: { value: name },
      });

      expect(handleChangeName).toBeCalled();
    });

    it('called with handleChangeCategory', () => {
      const { getByPlaceholderText } = renderInput();

      fireEvent.change(getByPlaceholderText('분류'), {
        target: { value: category },
      });

      expect(handleChangeCategory).toBeCalled();
    });

    it('called with handleChangeAddress', () => {
      const { getByPlaceholderText } = renderInput();

      fireEvent.change(getByPlaceholderText('주소'), {
        target: { value: address },
      });

      expect(handleChangeAddress).toBeCalled();
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
