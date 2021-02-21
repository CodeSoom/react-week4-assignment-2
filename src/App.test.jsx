import React from 'react';

import {useDispatch, useSelector} from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import restaurants from './fixtures/restaurants';

jest.mock('react-redux');

describe('App Test', () => {

  const dispatch = jest.fn();

  useDispatch.mockImplementation();

  useSelector.mockImplementation((selector)=> selector({
    restaurants:[],
    restaurant:{},
  }
  ));
  it('Render Restaurants Title', () => {
    const { queryByText } = render((
      <App />
    ));

    expect(dispatch).toBeCalledWith({
      type:'setRestaurants',
      payload:{restaurants:[]},
    });

    expect(queryByText(/김밥제국/)).toBeNull();
  });
});
