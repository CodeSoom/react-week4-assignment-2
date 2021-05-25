import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders title', () => {
    const { getByText } = render(<App />);

    const title = (getByText(/Restaurants/));

    expect(title).not.toBeNull();
  });

  it('renders 레스토랑 정보', () => {
    const { getByText } = render(<App />);

    expect(getByText('마녀주방 | 한식 | 서울시 강남구')).toHaveTextContent('마녀주방 | 한식 | 서울시 강남구');
    expect(getByText('시카고피자 | 양식 | 이태원동')).toHaveTextContent('시카고피자 | 양식 | 이태원동');
  });
});
