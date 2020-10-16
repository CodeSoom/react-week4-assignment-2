import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  it('rendering all restaurants', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        {
          id: 100,
          name: '치킨',
          category: '한식',
          address: '서울',
        },
        {
          id: 101,
          name: '피자',
          category: '양식',
          address: '대구',
        },
      ],
    }));

    const { getByText } = render(
      <ListContainer />,
    );

    expect(getByText('치킨|한식|서울')).not.toBeNull();
    expect(getByText('피자|양식|대구')).not.toBeNull();
  });
});
