import React from 'react';

import { render } from '@testing-library/jest-dom';

import Page from './Page';

describe('Page', () => {
  it('"Restaurant"가 제목으로 출력된다.', () => {
    const { container } = render(<Page />);

    expect(container).toHaveTextContent('Restaurants');
  });
});
