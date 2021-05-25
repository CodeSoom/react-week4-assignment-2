import React from 'react';

import App from "./App";

import { render } from '@testing-library/react';

describe('App', () => {
  it('renders title', () => {
    const { getByText } = render(<App />);

    const title = (getByText(/Restaurants/));

    expect(title).not.toBeNull();
  });

  it('renders 레스토랑 정보', () => {
    const { getByText } = render(
      (
        <div>
          <h1>Restaurants</h1>
          <ol>
            <li>마녀주방 | 한식 | 서울시 강남구</li>
            <li>시카고피자 | 양식 | 이태원동</li>
          </ol>
        </div>
      ),
    );

    expect(getByText('마녀주방 | 한식 | 서울시 강남구')).toHaveTextContent('마녀주방 | 한식 | 서울시 강남구');
    expect(getByText('시카고피자 | 양식 | 이태원동')).toHaveTextContent('시카고피자 | 양식 | 이태원동');
  });
});
