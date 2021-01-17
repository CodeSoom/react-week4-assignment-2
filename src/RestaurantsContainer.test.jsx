import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  const restaurants = [
    {
      id: 100,
      name: '마녀주방',
      category: '양식',
      address: '강남구 서현동',
    },
    {
      id: 101,
      name: '시카고피자',
      category: '양식',
      address: '용산구 이태원동',
    },
    {
      id: 102,
      name: '카와미',
      category: '일식',
      address: '분당구 정자동',
    },
  ];

  it('show restaurants', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants,
    }));

    const { container } = render(<RestaurantsContainer />);

    restaurants.forEach(({ name, category, address }) => {
      expect(container).toHaveTextContent(`${name} | ${category} | ${address}`);
    });
  });
});
