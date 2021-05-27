import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('App 화면', () => {
    // given
    // when
    const { getByText } = render(<App />);
    // then
    expect(getByText(/Restaurants/)).not.toBeNull();
  });
});
