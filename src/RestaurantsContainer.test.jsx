import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  it('renders restaurant', () => {
    const { queryByText } = render((
      <RestaurantsContainer />
    ));

    expect(queryByText(/김밥제국/)).not.toBeNull();
  });
});
