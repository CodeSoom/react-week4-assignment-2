import { render } from 'react-dom';

import App from './App';

describe('App', () => {
  // given
  // when
  const { getByText } = render(<App />);
  // then
  expect(getByText(/Restaurant/)).not.toBeNull();
});
