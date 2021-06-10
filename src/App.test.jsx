import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { initialState } from './reducer';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  it('renders restaurants page', () => {
    useSelector.mockImplementation((selector) => selector(initialState));
    const { container } = render(<App />);

    expect(container).toHaveTextContent('Restaurants');
    expect(container).toHaveTextContent('마녀주방 | 한식 | 서울시 강남구');
    expect(container).toHaveTextContent('등록');
  });
});
