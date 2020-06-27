import React from 'react';

import { render } from '@testing-library/react';

import Restaurant from './Restaurant';

describe('Restaurant', () => {
  it('has restaurant detail', () => {
    const restaurant = {
      id: 1, name: 'Seoul Pizza', type: 'Western', address: 'Seoul Itaewon',
    };

    const { container } = render((
      <Restaurant
        restaurant={restaurant}
      />
    ));

    expect(container).toHaveTextContent('Seoul Pizza');
    expect(container).toHaveTextContent('Western');
    expect(container).toHaveTextContent('Seoul Itaewon');
  });
});
