import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  const listRender = (restaurants) => render((
    <List
      restaurants={restaurants}
    />
  ));

  context('with restaurants', () => {
    const restaurants = [
      {
        id: 1, name: '마녀주방', type: '한식', address: '서울시 강남구',
      },
      {
        id: 2, name: '시카고피자', type: '양식', address: '이태원동',
      },
      {
        id: 2, name: '키와미', type: '일식', address: '분당구 정자동',
      },
    ];

    it('"restaurants"가 보인다.', () => {
      const { getByText } = listRender(restaurants);

      expect(getByText(/마녀주방/)).not.toBeNull();
      expect(getByText(/시카고피자/)).not.toBeNull();
      expect(getByText(/키와미/)).not.toBeNull();
    });
  });
});
