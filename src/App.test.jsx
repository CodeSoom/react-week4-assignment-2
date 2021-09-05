import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { getByText } = render((<App />
  ));

  expect(getByText(/마녀주방/)).not.toBeNull();
});
