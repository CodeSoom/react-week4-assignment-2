import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

import restaurants from '../fixtures/restaurants';

describe('List', () => {
  it('renders', () => {
    const { container } = render(<List restaurants={restaurants} />);

    expect(container).not.toBeNull();
  });
});
