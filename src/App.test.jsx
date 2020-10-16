import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import fixture from '../__fixtuers__/fixture';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const { restaurants, inputInfos } = fixture;

  useSelector.mockImplementation(() => ({
    restaurants,
    inputInfos,
  }));

  const { getByText, getByPlaceholderText } = render(
    <App />,
  );

  expect(getByText('Restaurants')).not.toBeNull();

  restaurants.forEach(({ name, category, address }) => {
    expect(getByText(`${name} | ${category} | ${address}`)).not.toBeNull();
  });

  inputInfos.forEach(({ placeholder, value }) => {
    expect(getByPlaceholderText(placeholder)).toHaveDisplayValue(value);
  });

  expect(getByText('등록')).not.toBeNull();
});
