import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '마녀주방', type: '한식', address: '서울시 강남구' },
      { id: 2, name: '시카고피자', type: '양식', address: '이태원역' },
    ],
  }));

  it('renders title', () => {
    const { getByText } = render(<App />);

    expect(getByText(/Restaurants/)).not.toBeNull();
  });

  it('renders 레스토랑 정보', () => {
    const { getByText } = render(<App />);

    expect(getByText('마녀주방 | 한식 | 서울시 강남구')).toHaveTextContent('마녀주방 | 한식 | 서울시 강남구');
    expect(getByText('시카고피자 | 양식 | 이태원역')).toHaveTextContent('시카고피자 | 양식 | 이태원역');
  });

  it('renders 입력창과 등록 버튼', () => {
    const { getByText, getByPlaceholderText } = render(<App />);

    expect(getByPlaceholderText(/이름/)).not.toBeNull();
    expect(getByPlaceholderText(/분류/)).not.toBeNull();
    expect(getByPlaceholderText(/주소/)).not.toBeNull();
    expect(getByText(/등록/)).not.toBeNull();
  });

  it('clicks 등록버튼', () => {
    const { getByText } = render(<App />);

    expect(getByText(/등록/)).not.toBeNull();
    fireEvent.click(getByText(/등록/));
  });

  it('changes 입력창', () => {
    const { getByPlaceholderText } = render(<App />);

    const testChangedInputValue = (item, value) => {
      const inputElementForItem = getByPlaceholderText(item);

      expect(inputElementForItem).not.toBeNull();
      fireEvent.change(inputElementForItem, { target: { value } });
      expect(inputElementForItem.value).toBe(value);
    };

    testChangedInputValue('이름', '이태리부대찌개');
    testChangedInputValue('분류', '중식');
    testChangedInputValue('주소', '경기도 양평군');
  });
});
