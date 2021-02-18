import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('제목(Restaurants)을 보여준다.', () => {
    const { queryByText } = render(<App />);

    expect(queryByText('Restaurants')).toBeInTheDocument();
  });

  it('이름을 입력하면 이름이 화면에 보인다.', () => {
    const { queryByDisplayValue, queryByPlaceholderText } = render(<App />);

    fireEvent.change(queryByPlaceholderText('이름'), {
      target: {
        value: '마녀 주방',
      },
    });

    expect(queryByDisplayValue('마녀 주방')).toBeInTheDocument();
  });

  it('음식 종류을 입력하면 종류가 화면에 보인다.', () => {
    const { queryByDisplayValue, queryByPlaceholderText } = render(<App />);

    fireEvent.change(queryByPlaceholderText('종류'), {
      target: {
        value: '한식',
      },
    });

    expect(queryByDisplayValue('한식')).toBeInTheDocument();
  });

  it('주소를 입력하면 주소가 화면에 보인다.', () => {
    const { queryByDisplayValue, queryByPlaceholderText } = render(<App />);

    fireEvent.change(queryByPlaceholderText('주소'), {
      target: {
        value: '서울시 강남구',
      },
    });

    expect(queryByDisplayValue('서울시 강남구')).toBeInTheDocument();
  });
});
