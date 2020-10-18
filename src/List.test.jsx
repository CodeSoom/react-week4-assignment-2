import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List Component', () => {
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

  it('Show List(restaurants)', () => {
    const { getByText } = render((
      <List restaurants={restaurants} />
    ));

    expect(getByText('마녀주방 | 한식 | 서울시 강남구')).not.toBeNull();
    expect(getByText('시카고피자 | 양식 | 이태원동')).not.toBeNull();
    expect(getByText('카와미 | 일식 | 분당구 정자동')).not.toBeNull();
  });
});
