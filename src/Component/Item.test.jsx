import React from 'react';

import { render } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  it('초기화면이 나타난다.', () => {
    const { container } = render((
      <Item />
    ));

    expect(container).toHaveTextContent('');
  });
});
