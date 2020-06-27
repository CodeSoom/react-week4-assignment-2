import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  function renderList(restaurants) {
    return render((
      <List
      restaurants={restaurants}
      />
    ));
  }

  it('render restaurants', () => {
    const restaurants = [
      {
        id: 1, name: 'Seoul Pizza', type: 'Western', address: 'Seoul Iteawon',
      },
      {
        id: 2, name: 'Busan Rice', type: 'Korean', address: 'Busan Daeyeon',
      },
    ];

    const { getByText } = renderList(restaurants);

    expect(getByText(/Seoul Iteawon/)).not.toBeNull();
    expect(getByText(/Busan Daeyeon/)).not.toBeNull();
  });
});
