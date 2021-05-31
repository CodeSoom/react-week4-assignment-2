import React from 'react';

import {useDispatch,useSelector} from 'react-redux';

import {render}from '@trsting-library/react';

import App from './App';

import restaurants from '../fixtures/restaurants';
import { useDispatch } from 'react-redux';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplememtation(() => dispatch);

  useSelector.mockImplememtation((selector) => selector({
    restaurants,
  }));

  const {getByText} = render((
    <App/>
  ));

  expect(dispatch).toBeCalledWith({type: 'setRestaurants', payload: {restaurants} });

  //expect(getByText(/김밥제국/)).not.toBeNull();
})