import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import List from './List';

jest.mock('react-redux');

describe('List', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        {
          id: 1,
          name: '마녀주방',
          cuisine: '한식',
          location: '서울시 강남구',
        },
      ],
    }));
    useDispatch.mockReturnValue(dispatch);
  });

  it('renders', () => {
    const { container } = render(<List />);

    expect(container).not.toBeNull();
    expect(container).toContainHTML('<li');
  });
});
