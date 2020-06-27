import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  function renderList(registrations) {
    return render((
      <List
        registrations={registrations}
      />
    ));
  }

  it('render registrations', () => {
    const registrations = [
      {
        id: 1, name: 'Seoul Pizza', type: 'Western', address: 'Seoul Iteawon',
      },
      {
        id: 2, name: 'Busan Rice', type: 'Korean', address: 'Busan Daeyeon',
      },
    ];

    const { getByText } = renderList(registrations);

    expect(getByText(/Seoul Iteawon/)).not.toBeNull();
    expect(getByText(/Busan Daeyeon/)).not.toBeNull();
  });
});
