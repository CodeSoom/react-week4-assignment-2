import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

describe('ListContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector(
      { restaurants },
    ));
  });

  it('renders List', () => {
    const { container } = render(<ListContainer />);

    expect(container).not.toBeNull();
    expect(container).toContainHTML('<ul');
  });
});
