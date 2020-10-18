import React from 'react';

import { render } from '@testing-library/react';

import ListContainer from './ListContainer';

describe('ListContainer', () => {
  it('renders', () => {
    const { container } = render(<ListContainer />);

    expect(container).not.toBeNull();
  });
});
