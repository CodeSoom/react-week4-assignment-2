import React from 'react';

import {render}from '@trsting-library/react';

import App from './App';

test('App', () => {
  const {getByText} = render((
    <App/>
  ));

  expect(getByText(//)).not.toBeNull();
})