import { render } from '@testing-library/react';

import { useSelector } from '../../../__mocks__/react-redux';

import Restaurants from '../../presentational/Restaurants';

jest.mock('react-redux');

test('Restaurants', () => {
  const restaurants = [
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
  ];

  useSelector.mockImplementation((selector) => selector({ restaurants }));

  const { getByText } = render(
    <Restaurants restaurants={restaurants} />,
  );

  restaurants.forEach((restaurant) => {
    expect(getByText(`${restaurant.name} | ${restaurant.category} | ${restaurant.address}`)).toBeInTheDocument();
  });
});
