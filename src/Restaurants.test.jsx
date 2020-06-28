import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  function renderList(restaurants) {
    return render((
      <Restaurants
        restaurants={restaurants}
      />
    ));
  }

  it('render restaurants', () => {
    const restaurants = [
      {
        id: 1, name: 'Seoul Pizza', category: 'Western', address: 'Seoul Iteawon',
      },
      {
        id: 2, name: 'Busan Rice', category: 'Korean', address: 'Busan Daeyeon',
      },
    ];

    const { getByText } = renderList(restaurants);

    expect(getByText(/Seoul Iteawon/)).not.toBeNull();
    expect(getByText(/Busan Daeyeon/)).not.toBeNull();
  });
});
