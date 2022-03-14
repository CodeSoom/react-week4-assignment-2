import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../src/App';
import store from '../src/store';

jest.unmock('react-redux');

describe('App', () => {
  const renderApp = () => render((<Provider store={store}><App /></Provider>));

  it('App 이 렌더링 된다.', () => {
    const { container } = renderApp();

    expect(container).not.toBeNull();
  });
});
