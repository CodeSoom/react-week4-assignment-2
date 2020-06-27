import React from 'react';
import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  function renderList(restaurants) {
    return render((
      <List
        restaurants={restaurants}
      />
    ));
  }

  context('with restaurants', () => {
    it('renders list', () => {
      const restaurants = [{
        id: 1, name: '맘스터치', category: '패스트푸드', address: '용인수지',
      }];
      const { getByText } = renderList(restaurants);

      expect(getByText('맘스터치 | 패스트푸드 | 용인수지')).not.toBeNull();
    });
  });

  context('without restaurants', () => {
    it('renders ', () => {
      const restaurants = [];
      const { container } = renderList(restaurants);

      expect(container.innerText).toBeUndefined();
    });
  });
});
