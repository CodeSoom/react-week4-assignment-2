import { render } from '@testing-library/react';

import App from './App';

// App test

describe('App', () => {
  const renderApp = () => render(<App />);

  it('renders list', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('모토쿠라시');
    expect(container).toHaveTextContent('일식');
    expect(container).toHaveTextContent('서울시 송파구');
    expect(container).toHaveTextContent('마녀주방');
    expect(container).toHaveTextContent('한식');
    expect(container).toHaveTextContent('서울시 강남구');
  });

  it('renders input', () => {
    const { getByPlaceholderText } = renderApp();

    expect(getByPlaceholderText(/이름/)).toBeInTheDocument();
    expect(getByPlaceholderText(/분류/)).toBeInTheDocument();
    expect(getByPlaceholderText(/주소/)).toBeInTheDocument();
  });

  it('renders button', () => {
    const { getByText } = renderApp();

    expect(getByText(/등록/)).toBeInTheDocument();
  });
});
