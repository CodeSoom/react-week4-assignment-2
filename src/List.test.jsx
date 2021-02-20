import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  it('test', () => {
    const reservations = [
      {
        id: 1, name: '마녀식당', category: '한식', address: '서울시 강남구',
      },
      {
        id: 2, name: '시카고피자', category: '양식', address: '이태원동',
      },
    ];

    const { getByText } = render((
      <List
        reservations={reservations}
      />));

    expect(getByText(/마녀식당/)).not.toBeNull();
    expect(getByText(/한식/)).not.toBeNull();
    expect(getByText(/서울시 강남구/)).not.toBeNull();

    expect(getByText(/시카고피자/)).not.toBeNull();
    expect(getByText(/양식/)).not.toBeNull();
    expect(getByText(/이태원동/)).not.toBeNull();
  });
});
