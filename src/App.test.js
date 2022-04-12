import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('shows "Restaurants"', () => {
    const { queryByText } = render(<App />);

    expect(queryByText(/Restaurants/)).not.toBeNull();
  });

  it('shows three inputs', () => {
    const { queryByLabelText } = render(<App />);

    expect(queryByLabelText(/이름/)).not.toBeNull();
    expect(queryByLabelText(/분류/)).not.toBeNull();
    expect(queryByLabelText(/주소/)).not.toBeNull();
  });
});
