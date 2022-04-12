import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('shows "Restaurants"', () => {
    const { queryByText } = render(<App />);

    expect(queryByText(/Restaurants/)).not.toBeNull();
  });
});
