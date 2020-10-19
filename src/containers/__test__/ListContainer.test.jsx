import React from 'react';
import { useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';

import ListContainer from '../ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
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

  useSelector.mockImplementation((selector) => selector({
    reservations,
  }));

  render(<ListContainer />);

  const { getByText } = screen;

  reservations.forEach(({ name, category, address }) => {
    expect(getByText(new RegExp(name, 'i'))).toBeInTheDocument();
    expect(getByText(new RegExp(category, 'i'))).toBeInTheDocument();
    expect(getByText(new RegExp(address, 'i'))).toBeInTheDocument();
  });
});
