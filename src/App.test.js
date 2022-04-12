import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('shows "Restaurants"', () => {
    const { queryByText } = render(<App />);

    expect(queryByText(/Restaurants/)).not.toBeNull();
  });

  it('has three inputs', () => {
    const { queryByPlaceholderText } = render(<App />);

    expect(queryByPlaceholderText(/이름/)).not.toBeNull();
    expect(queryByPlaceholderText(/분류/)).not.toBeNull();
    expect(queryByPlaceholderText(/주소/)).not.toBeNull();
  });

  it('has "등록" button', () => {
    const { queryByText } = render(<App />);

    expect(queryByText('등록')).not.toBeNull();
  });

  it('has restaurants list', () => {
    const { container } = render(<App />);
    const li = container.querySelector('li');
    expect(li).not.toBeNull();
  });
});
