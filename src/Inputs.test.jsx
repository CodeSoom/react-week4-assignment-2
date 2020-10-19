import React from 'react';

import { render } from '@testing-library/react';

import Inputs from './Inputs';

describe('Inputs', () => {
  it('renders', () => {
    const { container } = render(<Inputs />);

    expect(container).not.toBeNull();
  });
});
