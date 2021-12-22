import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [{
      id: 1, name: '알단테', address: '광교', category: '양식',
    }],
  }));

  it('ListContainer 컴포넌트가 잘 렌더링 된다', () => {
    const { getByText } = render(<ListContainer />);
    expect(getByText(/알단테/)).not.toBeNull();
    expect(getByText(/광교/)).not.toBeNull();
    expect(getByText(/양식/)).not.toBeNull();
  });
});
