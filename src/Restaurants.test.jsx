import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import restaurants from '../fixtures/restaurants';

describe('Restaurans', () => {
  it('renders restaurant', () => {
    const { queryByText } = render((
      <Restaurants Restaurants={restaurants} />
    ));

    expect(queryByText(/김밥제국/)).not.toBeNull();
  });
});
