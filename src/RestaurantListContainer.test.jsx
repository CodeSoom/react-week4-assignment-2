import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';
import RestaurantListContainer from './RestaurantListContainer';

jest.mock('react-redux');

describe('RestaurantListContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [{
        id: 1,
        name: '마녀주방',
        category: '한식',
        address: '서울시 강남구',
      }],
    }));
  });

  it('renders List', () => {
    const { getByText } = render(<RestaurantListContainer />);

    expect(getByText('마녀주방')).not.toBeNull();
    expect(getByText('한식')).not.toBeNull();
    expect(getByText('서울시 강남구')).not.toBeNull();
  });
});
