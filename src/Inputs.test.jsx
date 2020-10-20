import React from 'react';

import { render } from '@testing-library/react';

import Inputs from './Inputs';

describe('Inputs', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders', () => {
    const handleChange = jest.fn();

    const { container } = render(
      <Inputs
        restaurant={{
          name: '',
          category: '',
          address: '',
        }}
        onChange={handleChange}
      />,
    );

    expect(container).not.toBeNull();
  });
});
