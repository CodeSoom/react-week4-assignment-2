import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantList from './RestaurantList';

jest.mock('react-redux');

describe('RestaurantList', () => {
  it('render restaurants', () => {
    useSelector.mockImplementation((selector) => selector({
      name: '',
      category: '',
      address: '',
      restaurants: [
        { id: 1, text: '중국집 | 중식 | 홍대' },
        { id: 2, text: '한식집 | 한식 | 신촌' },
      ],
    }));

    const { getByText } = render((<RestaurantList />));

    expect(getByText('중국집 | 중식 | 홍대')).not.toBeNull();
    expect(getByText('한식집 | 한식 | 신촌')).not.toBeNull();
  });
});
