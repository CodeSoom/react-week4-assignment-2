import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  const restaurants = [
    {
      id: 1, name: '김밥제국', category: '분식', address: '서울시 강남구 역삼동',
    },
  ];

  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  it('renders restaurant', () => {
    const { queryByText } = render((
      <RestaurantsContainer />
    ));

    expect(queryByText(/김밥제국/)).not.toBeNull();
  });
});
