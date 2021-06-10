import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders restaurants page', () => {
    const { container, getByText } = render(<App />);
    // screen.debug();
    expect(container).toHaveTextContent('Restaurants');
    expect(container).toHaveTextContent('마녀주방 | 한식 | 서울시 강남구');
    expect(container).toHaveTextContent('등록');
  });
});
