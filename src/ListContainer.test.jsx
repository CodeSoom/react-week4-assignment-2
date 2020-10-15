import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  const restaurants = [
    { name: '마녀주방', category: '한식', address: '서울시 강남구' },
    { name: '시카고피자', category: '양식', address: '이태원동' },
  ];

  useSelector.mockImplementation(() => ({
    restaurants,
  }));

  const { getByText } = render(
    <ListContainer />,
  );

  restaurants.forEach(({ name, category, address }) => {
    expect(getByText(`${name} | ${category} | ${address}`)).not.toBeNull();
  });
});
