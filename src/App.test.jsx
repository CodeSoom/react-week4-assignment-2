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

  it('음식 분류을 입력하면 분류가 화면에 보인다.', () => {
    const { queryByDisplayValue, queryByPlaceholderText } = render(<App />);

    fireEvent.change(queryByPlaceholderText('분류'), {
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

  it('등록 버튼을 누르면 입력란은 비워지고 음식점 정보가 화면에 보인다.', () => {
    const { queryByText, queryByPlaceholderText } = render(<App />);
    const inputInfo = [
      { placeHolder: '이름', value: '마녀 주방' },
      { placeHolder: '분류', value: '한식' },
      { placeHolder: '주소', value: '서울시 강남구' },
    ];

    inputInfo.forEach(({ placeHolder, value }) => {
      fireEvent.change(queryByPlaceholderText(placeHolder), {
        target: { value },
      });
    });

    fireEvent.click(queryByText('등록'));

    expect(queryByPlaceholderText('이름')).toHaveValue('');
    expect(queryByPlaceholderText('분류')).toHaveValue('');
    expect(queryByPlaceholderText('주소')).toHaveValue('');
    expect(queryByText('마녀 주방 | 한식 | 서울시 강남구')).toBeInTheDocument();
  });
});
