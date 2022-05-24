import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders headline', () => {
    const { getByRole } = render(<App />);
    const element = getByRole('heading');
    expect(element).toHaveTextContent(/Restaurants/i);
  });
});
