import React from 'react';

import { render } from '@testing-library/react';

import ListContainer from './ListContainer';

describe('ListContainer', () => {
  it('초기화면', () => {
    const { container } = render((
      <ListContainer />
    ));

    expect(container).toHaveTextContent('');
  });
});
