import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders restaurants page', () => {
    const { container, getByText } = render(App);

    expect(container).toHaveTextContent('Restaurants');
  });
});
