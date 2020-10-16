import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  const renderList = (restaurants = []) => render((
    <List restaurants={restaurants} />
  ));

  beforeEach(() => jest.clearAllMocks());

  it('Empty Lists', () => {
    const { getAllByText } = renderList();
    getAllByText('');
  });

  it('show all List in Lists length over 1', () => {
    const restaurants = [
      {
        id: 1,
        name: '고봉민 김밥',
        category: '한식',
        address: '서울',
      },
      {
        id: 2,
        name: '도미노피자',
        category: '양식',
        address: '부산',
      },

    ];

    const { getByText } = renderList(restaurants);

    restaurants.forEach(({
      id, name, category, address,
    }) => {
      expect(getByText(`${name}|${category}|${address}`)).not.toBeNull();

      expect(id).not.toBeUndefined();
    });
  });
});
