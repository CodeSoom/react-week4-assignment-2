import { render, fireEvent } from '@testing-library/react';

import App from './App';

// App test
// 목적: 상태관리하고 있는 정보는 무엇이며, 제대로 동작하는가?

//  - renders App: Restaurants
// 1. when input text(이름, 분류, 주소) and click "등록" button
//  - renders text

describe('App', () => {
  const renderApp = () => render(<App />);

  it('renders App', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('Restaurants');
  });

  context('when input text(이름, 분류, 주소) and click "등록" button', () => {
    it('renders text', () => {
      const { container, getByPlaceholderText, getByText } = renderApp();

      fireEvent.change(getByPlaceholderText(/이름/), {
        target: { value: '모토쿠라시' },
      });
      fireEvent.change(getByPlaceholderText(/분류/), {
        target: { value: '일식' },
      });
      fireEvent.change(getByPlaceholderText(/주소/), {
        target: { value: '송파구' },
      });
      fireEvent.click(getByText(/등록/));

      expect(container).toHaveTextContent('모토쿠라시 일식 송파구');
    });
  });
});
