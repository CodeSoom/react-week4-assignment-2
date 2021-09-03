import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders Restaurants', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('Restaurants');
  });
});
