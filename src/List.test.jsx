import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  const renderList = (restaurantLists = []) => render((
    <List restaurantLists={restaurantLists} />
  ));

  it('Empty Lists', () => {
    const { getAllByText } = renderList();
    getAllByText('');
  });

  it('List over 1 in Lists', () => {
    const restaurantLists = [
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
        location: '대구',
      },
    ];
    const { getByText } = renderList(restaurantLists);

    restaurantLists.forEach(({
      id, nameTitle, classification, location,
    }) => {
      getByText(nameTitle).not.toBeNull();
      getByText(classification).not.toBeNull();
      getByText(location).not.toBeNull();

      expect();
    });
  });
});
