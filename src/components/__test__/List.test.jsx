import React from 'react';
import { render, screen } from '@testing-library/react';

import List from '../List';

describe('List', () => {
  const renderList = (reservations) => render((
    <List
      reservations={reservations}
    />
  ));

  context('with reservations', () => {
    const reservations = [
      {
        id: 1,
        name: '마녀주방',
        category: '한식',
        address: '서울시 강남구',
      },
      {
        id: 2,
        name: '시카고피자',
        category: '양식',
        address: '이태원동',
      },
      {
        id: 3,
        name: '카와미',
        category: '일식',
        address: '분당구 정자동',
      },
    ];

    it('예약들이 랜더링 되었는지 확인', () => {
      renderList(reservations);

      const { getByText } = screen;

      reservations.forEach(({ name, category, address }) => {
        expect(getByText(new RegExp(name, 'i'))).toBeInTheDocument();
        expect(getByText(new RegExp(category, 'i'))).toBeInTheDocument();
        expect(getByText(new RegExp(address, 'i'))).toBeInTheDocument();
      });
    });
  });
});
