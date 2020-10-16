import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import fixture from '../__fixtuers__/fixture';

import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  const { restaurants } = fixture;

  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const { container } = render(
    <ListContainer />,
  );

  restaurants.forEach(({ name, category, address }) => {
    expect(container).toHaveTextContent(`${name} | ${category} | ${address}`);
  });
});
