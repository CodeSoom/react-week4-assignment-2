import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('제목(Restaurants)을 보여준다.', () => {
    const { queryByText } = render(<App />);

    expect(queryByText('Restaurants')).toBeInTheDocument();
  });
});
