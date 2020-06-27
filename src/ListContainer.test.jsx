import React from 'react';
import { render } from '@testing-library/react';

import ListContainer from './ListContainer';

// jest.mock('react-redux');
// TODO: Add useSelector

test('ListContainer', () => {
  const restaurants = [
    {
      id: 1, name: '맘스터치', category: '패스트푸드', address: '용인수지',
    },
    {
      id: 2, name: '깐부치킨', category: '치킨', address: '용인수지',
    },
  ];

  const { container } = render((
    <ListContainer />
  ));

  restaurants.forEach((restaurant) => {
    expect(container).toHaveTextContent(restaurant.name);
    expect(container).toHaveTextContent(restaurant.category);
    expect(container).toHaveTextContent(restaurant.address);
  });
});
