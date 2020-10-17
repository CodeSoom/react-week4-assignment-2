import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { getByText } = render((
    <App />
  ));
  
  expect(getByText(/등록/)).not.toBeNull();
});

describe ('App', () => {
  context("Value is received.", () => {
    it('Show revceived the value.', () => {
      const { getByPlaceholderText } = render((<App />));

      fireEvent.change(getByPlaceholderText('이름'), {target: { value: 'nameExample'} });

      expect(getByPlaceholderText('이름').value).toBe('nameExample');
    });
  });
});