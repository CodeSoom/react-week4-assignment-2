import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('App 화면', () => {
    // given
    // when
    const { getByText, getByPlaceholderText } = render(<App />);
    // then
    expect(getByText(/Restaurants/)).not.toBeNull();
    expect(getByPlaceholderText(/이름/)).not.toBeNull();
    expect(getByPlaceholderText(/분류/)).not.toBeNull();
    expect(getByPlaceholderText(/주소/)).not.toBeNull();
    expect(getByText(/등록/)).not.toBeNull();
  });
});
