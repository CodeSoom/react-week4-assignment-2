import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('"Restaurant"가 제목으로 출력된다.', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('Restaurants');
  });
});
