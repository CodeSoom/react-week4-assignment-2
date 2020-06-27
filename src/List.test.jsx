import React from 'react';
import { render } from '@testing-library/react';

import List from './List';

test('List', () => {
  // TODO: with restaurants
  // TODO: without restaurants
  const restaurants = {
    newId: 2,
    name: '고봉민김밥',
    category: '분식',
    address: '강남',
    restaurants: [{
      id: 1, name: '맘스터치', category: '패스트푸드', address: '용인수지',
    }],
  };

  const { getByText } = render((
    <List
      restaurants={restaurants}
    />
  ));

  expect(getByText('맘스터치 | 패스트푸드 | 용인수지')).not.toBeNull();
});
