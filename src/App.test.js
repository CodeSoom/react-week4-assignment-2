import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('shows Hello', () => {
    const { getByText } = render(<App />);

    expect(getByText(/Hello/)).toBeVisible();
  });
});
