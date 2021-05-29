import React from 'react';

import {useSelector} from 'react-redux';

import {render}from '@trsting-library/react';

import App from './App';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplememtation((selector) => selector({
    restaurants,
  }));

  const {getByText} = render((
    <App/>
  ));

  expect(getByText(/김밥제국/)).not.toBeNull();
})