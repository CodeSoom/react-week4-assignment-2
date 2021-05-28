import { render } from '@testing-library/react';

import { Provider } from 'react-redux';

import App from './App';

import store from './store';

describe('App컴포넌트 관련 테스트', () => {
  it('render로 App 화면을 그려지는 모습 확인 ', () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(getByText(/Restaurants/)).not.toBeNull();
    expect(getByPlaceholderText(/이름/)).not.toBeNull();
    expect(getByPlaceholderText(/분류/)).not.toBeNull();
    expect(getByPlaceholderText(/주소/)).not.toBeNull();
    expect(getByText(/등록/)).not.toBeNull();
  });
});
