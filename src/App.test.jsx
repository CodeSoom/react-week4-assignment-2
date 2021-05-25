import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders title', () => {
    const { getByText } = render(<App />);

    const title = (getByText(/Restaurants/));

    expect(title).not.toBeNull();
  });

  it('renders 레스토랑 정보', () => {
    const { getByText } = render(<App />);

    expect(getByText('마녀주방 | 한식 | 서울시 강남구')).toHaveTextContent('마녀주방 | 한식 | 서울시 강남구');
    expect(getByText('시카고피자 | 양식 | 이태원동')).toHaveTextContent('시카고피자 | 양식 | 이태원동');
  });

  it('renders 입력창과 등록 버튼', () => {
    const { getByText, getByPlaceholderText } = render(
      (
        <div>
          <h1>Restaurants</h1>
          <ul>
            <li>마녀주방 | 한식 | 서울시 강남구</li>
            <li>시카고피자 | 양식 | 이태원동</li>
          </ul>
          <input placeholder="이름"/>
          <input placeholder="분류"/>
          <input placeholder="주소"/>
          <button type="button">등록</button>
        </div>
      ),
    );

    expect(getByPlaceholderText(/이름/)).not.toBeNull();
    expect(getByPlaceholderText(/분류/)).not.toBeNull();
    expect(getByPlaceholderText(/주소/)).not.toBeNull();
    expect(getByText(/등록/)).not.toBeNull();
  })
});
