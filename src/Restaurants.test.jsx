import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import restaurants from '../fixtures/restaurants';

describe('Restaurants', () => {
  const { getByText } = render((
    <Restaurants restaurants={restaurants} />
  ));

  it('입력한 레스토랑이 랜더링된다', () => {
    expect(getByText(/맛나분식/)).not.toBeNull();
  });
});
