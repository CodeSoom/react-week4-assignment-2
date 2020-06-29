import React from 'react';

import { render } from '@testing-library/react';

import Restaurant from './Restaurant';

describe('Restaurant', () => {
  it('화면에 이름, 분류, 주소가 나타난다.', () => {
    const restaurant = {
      name: '마녀주방',
      category: '한식',
      address: '강남',
    };

    const { getByText } = render((
      <Restaurant
        restaurant={restaurant}
      />
    ));

    expect(getByText(/마녀주방/)).toBeInTheDocument();
    expect(getByText(/한식/)).toBeInTheDocument();
    expect(getByText(/강남/)).toBeInTheDocument();
  });
});
