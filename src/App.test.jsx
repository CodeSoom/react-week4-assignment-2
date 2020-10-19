import React from 'react';

import App from './App';

import { render } from '@testing-library/react';

test('App', () => {
const { getByText} = render((
  <App />
));

expect(getByText(/김밥제국/)).not.toBeNull();
});
