import React from 'react';

import { render } from '@testing-library/react';

import Restaurant from './Restaurant';

test('Restaurant', () => {
  const { getByText } = render((
    <Restaurant
      name="마녀주방"
      category="한식"
      address="서울시 성동구"
    />
  ));

  expect(getByText(/마녀주방/)).not.toBeNull();
  expect(getByText(/한식/)).not.toBeNull();
  expect(getByText(/서울시 성동구/)).not.toBeNull();
});
