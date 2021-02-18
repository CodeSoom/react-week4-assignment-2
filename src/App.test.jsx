import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('제목 Restaurants, 예약 목록을 보여준다.', () => {
    const { container } = render((
      <App />
    ));

    expect(container).toHaveTextContent(/Restaurants/);
    expect(container).toHaveTextContent(/마녀주방 | 한식 | 서울시 강남구/);
  });
});
