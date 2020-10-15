import React from 'react';

import { render } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  const { getByText } = render((
    <Item />
  ));

  it('shows a task', () => {

  });
});
