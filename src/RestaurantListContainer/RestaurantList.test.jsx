import { render } from '@testing-library/react';

import RestaurantList from './RestaurantList';

describe('RestaurantList', () => {
  it('renders restaurants list', () => {
    const restaurant = {
      id: 1, name: '김밥천국', category: '분식', address: '서울시 서초구 서초대로',
    };
    const { getByText } = render(<RestaurantList list={[restaurant]} />);

    expect(getByText(restaurant.name)).toBeInTheDocument();
    expect(getByText(restaurant.category)).toBeInTheDocument();
    expect(getByText(restaurant.address)).toBeInTheDocument();
  });
});
