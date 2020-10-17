import React from 'react';
import { Provider } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';
import store from './store';

describe('App', () => {
  it('"Restaurant"가 제목으로 출력된다.', () => {
    const { container } = render((
      <Provider store={store}>
        <App />
      </Provider>
    ));

    expect(container).toHaveTextContent('Restaurants');
  });
});
