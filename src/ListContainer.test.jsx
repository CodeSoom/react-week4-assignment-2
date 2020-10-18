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

  const { container } = render((
    <ListContainer />
  ));

  restaurantsFixture.forEach(({ name, address, category }) => {
    expect(container).toHaveTextContent(`${name} | ${category} | ${address}`);
  });
});
