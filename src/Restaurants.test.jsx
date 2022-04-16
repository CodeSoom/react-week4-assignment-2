import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

describe('Restaurans', () => {
  it('renders restaurant', () => {
    const restaurants = [
      {
        id: 1, name: '김밥제국', category: '분식', address: '서울시 강남구 역삼동',
      },
    ];

    const { queryByText } = render((
      <Restaurants restaurants={restaurants} />
    ));

    expect(queryByText(/김밥제국/)).not.toBeNull();
  });
});
