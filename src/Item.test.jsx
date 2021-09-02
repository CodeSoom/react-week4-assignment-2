import React from 'react';

import { render } from '@testing-library/react';

import Item from './Item';

test('Item', () => {
  const task = {
    id: 1, title: '이름', classification: '분류', address: '주소',
  };

  const { getByText } = render((
    <Item task={task} />
  ));

  expect(getByText(/이름분류주소/)).not.toBeNull();
});
