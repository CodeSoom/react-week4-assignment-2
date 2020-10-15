import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const handleChangeName = jest.fn();
  const handleChangeGroup = jest.fn();
  const handleChangeAddress = jest.fn();
  const handleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const restaurantInfo = {
    name: '한식이 좋아!',
    group: '한식',
    address: '서울시 강남구',
  };

  const renderInput = () => render(<Input
    restaurantInfo={restaurantInfo}
    onChangeName={handleChangeName}
    onChangeGroup={handleChangeGroup}
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
    it('renders name, group, address', () => {
      const { getByPlaceholderText } = renderInput();

      const { name, group, address } = restaurantInfo;

      expect(getByPlaceholderText('이름')).toHaveDisplayValue(name);
      expect(getByPlaceholderText('분류')).toHaveDisplayValue(group);
      expect(getByPlaceholderText('주소')).toHaveDisplayValue(address);
    });
  });

  context('when restaurant info is changed', () => {
    const newRestaurantInfo = {
      name: '중식이 좋아!',
      group: '중식',
      address: '경기도 분당구',
    };

    const { name, group, address } = newRestaurantInfo;

    it('called with handleChangeName', () => {
      const { getByPlaceholderText } = renderInput();

      fireEvent.change(getByPlaceholderText('이름'), {
        target: { value: name },
      });

      expect(handleChangeName).toBeCalled();
    });

    it('called with handleChangeGroup', () => {
      const { getByPlaceholderText } = renderInput();

      fireEvent.change(getByPlaceholderText('분류'), {
        target: { value: group },
      });

      expect(handleChangeGroup).toBeCalled();
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
