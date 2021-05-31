import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

test('RestaurantsContainer', () => {
  useSelector.mockImplementation(() => ({
    restaurants: [],
  }));

  const { queryByText } = render(
    (
      <RestaurantsContainer />
    ),
  );

  expect(queryByText('김밥제국')).toBeNull();
});
