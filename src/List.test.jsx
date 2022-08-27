import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  const restaurant = {
    id: 1,
    name: '마녀주방',
    classification: '한식',
    address: '서울시 강남구',
  };

  it('renders restaurant', () => {
    const { getByRole } = render((
      <List restaurant={restaurant} />
    ));

    expect(getByRole('listitem').textContent)
      .toBe(`${restaurant.name} | ${restaurant.classification} | ${restaurant.address}`);
  });
});
