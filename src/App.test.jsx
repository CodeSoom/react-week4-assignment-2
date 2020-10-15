import React from 'react';

import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  const renderApp = () => render(<App />);
  it('should visible input', () => {
    const { getByText, getByPlaceholderText } = renderApp();

    getByText('Restaurants');

    getByPlaceholderText('이름');
    getByPlaceholderText('분류');
    getByPlaceholderText('장소');

    getByText('등록');
  });
});
