import React from 'react';

import { render } from '@testing-library/react';

import App from '../src/App';

test('App', () => {
  const { getByText } = render((
    <App />
  ));

  expect(getByText(/김밥천국/)).not.toBeNull();
});
