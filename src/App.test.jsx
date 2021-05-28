import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('has a title', () => {
    const { getByText } = render(<App />);

    expect(getByText(/Restaurants/)).not.toBeNull();
  });
});
