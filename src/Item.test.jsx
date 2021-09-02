import React from 'react';

import { render } from '@testing-library/react';

import Item from './Item';

test('Item', () => {
  const task = { id: 1, title: '뭐라도 하기' };

  const { getByText } = render((
    <Item task={task} />
  ));

  expect(getByText(/뭐라도 하기/)).not.toBeNull();
});
