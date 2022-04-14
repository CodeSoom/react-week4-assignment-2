import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders `Restaurants` text', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText(/Restaurants/)).not.toBeNull();
  });

  it('renders three input box', () => {
    const { queryByPlaceholderText } = render((
      <App />
    ));

    expect(queryByPlaceholderText(/이름/)).not.toBeNull();
    expect(queryByPlaceholderText(/분류/)).not.toBeNull();
    expect(queryByPlaceholderText(/주소/)).not.toBeNull();
  });
});
