import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector(
      {
        restaurants: [
          {
            id: 1,
            name: '마녀주방',
            cuisine: '한식',
            location: '서울시 강남구',
          },
        ],
      },
    ));
  });

  it('renders List', () => {
    const { container } = render(<ListContainer />);

    expect(container).not.toBeNull();
    expect(container).toContainHTML('<ul');
  });
});
