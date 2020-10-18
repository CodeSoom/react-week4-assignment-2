import React from 'react';

import { render } from '@testing-library/react';

import ListContainer from './ListContainer';

describe('ListContainer', () => {
  it('renders List', () => {
    const { container } = render(<ListContainer />);

    expect(container).not.toBeNull();
    expect(container).toContainHTML('<ul');
  });
});
