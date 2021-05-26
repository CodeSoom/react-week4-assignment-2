import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import RestaurantInputContainer from './RestaurantInputContainer';

jest.mock('react-redux');

describe('RestaurantInputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  it('renders 입력창과 등록 버튼', () => {
    const { getByText, getByPlaceholderText } = render(<RestaurantInputContainer />);

    expect(getByPlaceholderText(/이름/)).not.toBeNull();
    expect(getByPlaceholderText(/분류/)).not.toBeNull();
    expect(getByPlaceholderText(/주소/)).not.toBeNull();
    expect(getByText(/등록/)).not.toBeNull();
  });

  it('clicks 등록버튼', () => {
    const { getByText } = render(<RestaurantInputContainer />);

    expect(getByText(/등록/)).not.toBeNull();
    fireEvent.click(getByText(/등록/));
    expect(dispatch).toBeCalled();
  });

  it('changes 입력창', () => {
    const { getByPlaceholderText } = render(<RestaurantInputContainer />);

    const testChangedInputValue = (item, value) => {
      const inputElementForItem = getByPlaceholderText(item);

      expect(inputElementForItem).not.toBeNull();
      fireEvent.change(inputElementForItem, { target: { value } });
      expect(inputElementForItem.value).toBe(value);
      expect(dispatch).toBeCalled();
    };

    testChangedInputValue('이름', '이태리부대찌개');
    testChangedInputValue('분류', '중식');
    testChangedInputValue('주소', '경기도 양평군');
  });
});
