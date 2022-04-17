import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const { queryByText } = render((
    <App />
  ));

  expect(queryByText(/Restaurants/)).not.toBeNull();
});
