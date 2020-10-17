import React from 'react';

import { render } from '@testing-library/react';

import ListItem from './ListItem';

describe('ListItem Component', () => {
  it('Show single item(Restaurant)', () => {
    const restaurant = {
      id: 101,
      name: '마녀주방',
      category: '한식',
      address: '서울시 강남구',
    };

    const { getByText } = render((
      <ListItem restaurant={restaurant} />
    ));

    expect(getByText('마녀주방 | 한식 | 서울시 강남구')).not.toBeNull();
  });
});
