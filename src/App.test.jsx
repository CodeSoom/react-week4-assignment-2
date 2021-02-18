import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('초기상태. title, input, button을 보여준다.', () => {
    const { getByText, getByPlaceholderText } = render((
      <App />
    ));

    getByPlaceholderText(/이름/);
    getByPlaceholderText(/분류/);
    getByPlaceholderText(/주소/);

    getByText(/등록/);
  });

  it(' 예약 목록을 보여준다.', () => {
    const tasks = [
      {
        title: '마녀주방 | 한식 | 서울시 강남구',
        id: 1,
      },
      {
        title: '시카고피자 | 양식 | 이태원동',
        id: 2,
      },
    ];

    const { container } = render((
      <App />
    ));

    expect(container).toHaveTextContent(/Restaurants/);
    tasks.forEach((task) => {
      expect(container).toHaveTextContent(task.title);
    });
  });
});
