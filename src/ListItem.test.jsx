import React from 'react';

import { render } from '@testing-library/react';

import ListItem from './ListItem';

describe('ListItem Component', () => {
  it('Show single item(Restaurant)', () => {
    const { getByText } = render((
      <ListItem />
    ));

    expect(getByText('마녀주방 | 한식 | 서울시 강남구')).not.toBeNull();
  });
});
