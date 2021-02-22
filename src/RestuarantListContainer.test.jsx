import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantListContainer from './RestaurantListContainer';

jest.mock('react-redux');

describe('RestaurantListContainer', () => {
  const restaurants = [{
    id: 1,
    name: '라이브볼',
    category: '샐러드',
    address: '서울시 신논현동',
  }];

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurants,
    }));
  });

  it('renders restaurant list', () => {
    const { container } = render((
      <RestaurantListContainer />
    ));

    expect(container).toHaveTextContent('라이브볼');
  });
});
