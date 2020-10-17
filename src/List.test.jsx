import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List Component', () => {
  it('Show restaurant item', () => {
    const { getByText } = render((
      <List />
    ));

    expect(getByText('마녀주방 | 한식 | 서울시 강남구')).not.toBeNull();
    expect(getByText('시카고피자 | 양식 | 이태원동')).not.toBeNull();
  });
});
