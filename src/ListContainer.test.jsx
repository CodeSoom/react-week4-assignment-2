import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';
import ListContainer from './ListContainer';

/**
 * redux store에서 state르 받아와 화면에 렌더하는지?
 */

jest.mock();

describe('ListContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      list: [{
        id: 1,
        name: '마녀주방',
        category: '한식',
        address: '서울시 강남구',
      }],
    }));
  });

  it('renders List', () => {
    const { getByText } = render(<ListContainer />);

    expect(getByText('마녀주방')).not.toBeNull();
    expect(getByText('한식')).not.toBeNull();
    expect(getByText('서울시 강남구')).not.toBeNull();
  });
});
