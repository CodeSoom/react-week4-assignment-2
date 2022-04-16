import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders restaurant', () => {
    const { queryByText } = render((
      <App />
    ));

    expect(queryByText(/김밥제국/)).not.toBeNull();
  });
});
