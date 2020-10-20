import React from 'react';

import { render } from '@testing-library/react';

import List from './List';
import { restaurants } from '../fixtures/fixtures';

test('List', () => {
  const { container } = render((
    <List
      restaurants={restaurants}
    />
  ));

  expect(container).toHaveTextContent(/마녀주방 | 한식 | 서울시 강남구/);
  expect(container).toHaveTextContent(/역전우동 | 일식 | 서울시 강남구/);
});
