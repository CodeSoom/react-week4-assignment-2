import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { getbyText } = render(<App />);
});

expect(getbyText(/김밥제국/)).not.toBeNull;
