import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

jest.mock('react-redux');

describe('Restaurants', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [{
      id: 1, name: '알단테', address: '광교', category: '양식',
    }],
  }));

  it('Restaurants 컴포넌트가 잘 렌더링 된다', () => {
    const { getByText } = render(<Restaurants />);
    expect(getByText(/알단테/)).not.toBeNull();
    expect(getByText(/광교/)).not.toBeNull();
    expect(getByText(/양식/)).not.toBeNull();
  });
});
