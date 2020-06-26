import React from 'react';

import { render } from '@testing-library/react';

import ListContainer from './ListContainer';

describe('ListContainer', () => {
  it('화면에 아무것도 나타나지 않는다.', () => {
    const { container } = render((
      <ListContainer />
    ));

    expect(container).toHaveTextContent('');
  });
});
