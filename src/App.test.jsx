import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  it('exist title, input, button', () => {
    const { getByText, getByPlaceholderText } = render((
      <App />
    ));

    expect(getByText('Restaurants')).not.toBeNull();

    expect(getByPlaceholderText('이름')).not.toBeNull();
    expect(getByPlaceholderText('분류')).not.toBeNull();
    expect(getByPlaceholderText('주소')).not.toBeNull();
    expect(getByText('등록')).not.toBeNull();
  });

  context('when render ListContainer', () => {
    it('show restaurant items ', () => {
      const restaurants = [
        {
          id: 101,
          name: '마녀주방',
          category: '한식',
          address: '서울시 강남구',
        },
        {
          id: 102,
          name: '시카고피자',
          category: '양식',
          address: '이태원동',
        },
        {
          id: 103,
          name: '카와미',
          category: '일식',
          address: '분당구 정자동',
        },
      ];

      useSelector.mockImplementation((selector) => selector({
        restaurants,
      }));

      const { getByText } = render((
        <App />
      ));

      expect(getByText('마녀주방 | 한식 | 서울시 강남구')).not.toBeNull();
      expect(getByText('시카고피자 | 양식 | 이태원동')).not.toBeNull();
      expect(getByText('카와미 | 일식 | 분당구 정자동')).not.toBeNull();
    });
  });
});
