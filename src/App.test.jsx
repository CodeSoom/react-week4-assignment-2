import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders title', () => {
    const { getByText } = render(<App />);

    expect(getByText(/Restaurants/)).not.toBeNull();
  });

  it('renders 레스토랑 정보', () => {
    const { getByText } = render(<App />);

    expect(getByText('마녀주방 | 한식 | 서울시 강남구')).toHaveTextContent('마녀주방 | 한식 | 서울시 강남구');
    expect(getByText('시카고피자 | 양식 | 이태원동')).toHaveTextContent('시카고피자 | 양식 | 이태원동');
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

  it('changs 입력창', () => {
    const { getByPlaceholderText } = render(<App />);

    expect(getByPlaceholderText(/이름/)).not.toBeNull();
    fireEvent.change(getByPlaceholderText(/이름/), { target: { value: '이태리부대찌개' } });
    expect(getByPlaceholderText(/이름/).value).toBe('이태리부대찌개');

    expect(getByPlaceholderText(/분류/)).not.toBeNull();
    fireEvent.change(getByPlaceholderText(/분류/), { target: { value: '중식' } });
    expect(getByPlaceholderText(/분류/).value).toBe('중식');

    expect(getByPlaceholderText(/주소/)).not.toBeNull();
    fireEvent.change(getByPlaceholderText(/주소/), { target: { value: '경기도 양평군' } });
    expect(getByPlaceholderText(/주소/).value).toBe('경기도 양평군');
  });
});
