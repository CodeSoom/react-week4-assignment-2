import React from 'react';

import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import { restaurantsFixture } from './fixtures/fixtures';
import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: restaurantsFixture,
  }));

  const { getByText } = render((
    <ListContainer />
  ));

  expect(getByText(/마녀주방/)).not.toBeNull();
  expect(getByText(/시카고피자/)).not.toBeNull();
  expect(getByText(/키와미/)).not.toBeNull();
});
