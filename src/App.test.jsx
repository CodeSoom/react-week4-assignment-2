/* 계획
1. 아래 컴포넌트를 포함하고 있다
*/
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from './store';
import App from './App';

describe('App', () => {
  it('render Lower Component', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(getByText(/Restaurants/)).not.toBeNull();
    expect(getByText(/등록/)).not.toBeNull();
  });
});
