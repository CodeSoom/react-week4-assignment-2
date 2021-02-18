import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders title', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText(/Restaurants/)).not.toBeNull();
  });

  it('renders restaurant inputs', () => {
    const { getByPlaceholderText } = render((
      <App />
    ));

    expect(getByPlaceholderText(/이름/)).not.toBeNull();

    fireEvent.change(getByPlaceholderText(/이름/), {
      target: { value: '마녀주방' },
    });

    expect(getByPlaceholderText(/이름/).value).toBe('마녀주방');
  });

  it('adds restaurant information', () => {
    const { container, getByPlaceholderText, getByText } = render((
      <App />
    ));

    fireEvent.change(getByPlaceholderText(/이름/), {
      target: { value: '마녀주방' },
    });

    fireEvent.change(getByPlaceholderText(/분류/), {
      target: { value: '한식' },
    });

    fireEvent.change(getByPlaceholderText(/주소/), {
      target: { value: '서울시 강남구' },
    });

    fireEvent.click(getByText(/등록/));

    expect(container).toHaveTextContent(/마녀주방/);
  });

  it('empties input after clicking "등록" button', () => {
    const { getByPlaceholderText, getByText } = render((
      <App />
    ));

    fireEvent.change(getByPlaceholderText(/이름/), {
      target: { value: '마녀주방' },
    });

    fireEvent.change(getByPlaceholderText(/분류/), {
      target: { value: '한식' },
    });

    fireEvent.change(getByPlaceholderText(/주소/), {
      target: { value: '서울시 강남구' },
    });

    fireEvent.click(getByText(/등록/));

    expect(getByPlaceholderText(/이름/).value).toBe('');
    expect(getByPlaceholderText(/분류/).value).toBe('');
    expect(getByPlaceholderText(/주소/).value).toBe('');
  });
});
