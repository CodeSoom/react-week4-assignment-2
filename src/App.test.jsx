import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('should render Child Component', () => {
    const { getByText, getByPlaceholderText } = render(<App />);

    expect(getByText('Restaurants')).toBeInTheDocument();

    expect(getByPlaceholderText('이름')).toBeInTheDocument();
    expect(getByPlaceholderText('분류')).toBeInTheDocument();
    expect(getByPlaceholderText('주소')).toBeInTheDocument();
    expect(getByText('등록')).toBeInTheDocument();
  });
});
