import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [],
    restaurantInfo: {
      name: '',
      address: '',
      category: '',
    },
  }));

  it('App이 깨지지 않고 렌더링 됩니다 ', () => {
    render(<App />);
  });
});
