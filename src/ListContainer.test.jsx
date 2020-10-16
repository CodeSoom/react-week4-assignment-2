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
          nameTitle: '치킨',
          classification: '한식',
          location: '서울',
        },
        {
          id: 101,
          nameTitle: '피자',
          classification: '양식',
          location: '대구',
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
