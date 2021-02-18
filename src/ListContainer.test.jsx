import React from 'react';

import { render } from '@testing-library/react';

import ListContainer from './ListContainer';

/**
 * redux store에서 state르 받아와 화면에 렌더하는지?
 */

describe('ListContainer', () => {
  it('renders List', () => {
    const { getByText } = render(<ListContainer />);
  });
});
