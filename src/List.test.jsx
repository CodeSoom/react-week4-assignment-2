import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  it('renders', () => {
    const { container } = render(<List restaurants={
      [
        {
          id: 1,
          name: '마녀주방',
          cuisine: '한식',
          location: '서울시 강남구',
        },
      ]
    }
    />);

    expect(container).not.toBeNull();
    expect(container).toContainHTML('<li');
  });
});
