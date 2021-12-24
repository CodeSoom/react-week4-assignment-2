import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [],
  }));

  it('renders title', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('heading')).toHaveTextContent('Restaurants');
  });

  // TODO: 통합 테스트
});
