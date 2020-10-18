import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import ListContainer from './ListContainer';

import restaurantTestData from './fixtures';

jest.mock('react-redux');

describe('ListContainer', () => {
  it('rendering all restaurants', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        restaurantTestData(100, '치킨', '한식', '서울'),
        restaurantTestData(101, '피자', '양식', '대구'),
      ],
    }));

    const { getByText } = render(
      <ListContainer />,
    );

    expect(getByText('치킨|한식|서울')).not.toBeNull();
    expect(getByText('피자|양식|대구')).not.toBeNull();
  });
});
