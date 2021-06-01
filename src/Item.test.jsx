import { render } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  const restaurant = {
    id: 1, name: '마녀주방', category: '한식', location: '서울시 강남구',
  };

  it('has a listitem', () => {
    const { getAllByRole } = render(<Item restaurant={restaurant} />);

    expect(getAllByRole('listitem')).not.toBeNull();
  });

  it('have a restaurant information', () => {
    const { getByText } = render(<Item restaurant={restaurant} />);

    expect(getByText(
      `${restaurant.name} | ${restaurant.category} | ${restaurant.location}`,
    )).not.toBeNull();
  });
});
