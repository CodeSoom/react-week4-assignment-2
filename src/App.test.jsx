import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  function renderApp() {
    return render((
      <App />
    ));
  }

  it('초기상태. title, input, button을 보여준다.', () => {
    const { queryByText, getByPlaceholderText } = renderApp();

    expect(getByPlaceholderText(/이름/)).not.toBeNull();
    expect(getByPlaceholderText(/분류/)).not.toBeNull();
    expect(getByPlaceholderText(/주소/)).not.toBeNull();

    expect(queryByText(/등록/)).not.toBeNull();
  });

  it(' 예약 목록을 보여준다.', () => {
    const restaurants = [
      {
        name: '마녀주방',
        category: '한식',
        address: '서울시 강남구',
        id: 1,
      },
      {
        name: '시카고피자',
        category: '양식',
        address: '이태원동',
        id: 2,
      },
    ];

    const { container } = renderApp();

    expect(container).toHaveTextContent(/Restaurants/);

    restaurants.forEach((restaurant) => {
      const { name, category, address } = restaurant;

      expect(container).toHaveTextContent(`${name} | ${category} | ${address}`);
    });
  });
});
