import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders `Restaurants` text', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText(/Restaurants/)).not.toBeNull();
  });
});
