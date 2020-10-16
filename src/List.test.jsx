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
        nameTitle: '고봉민 김밥',
        classification: '한식',
        location: '서울',
      },
      {
        id: 2,
        nameTitle: '도미노피자',
        classification: '양식',
        location: '부산',
      },

    ];

    const { getByText } = renderList(restaurants);

    restaurants.forEach(({
      id, nameTitle, classification, location,
    }) => {
      expect(getByText(`${nameTitle}|${classification}|${location}`)).not.toBeNull();

      expect(id).not.toBeUndefined();
    });
  });
});
