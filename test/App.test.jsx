import { render } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
  const renderApp = () => render((<App />));

  it('App 이 렌더링 된다.', () => {
    const { container } = renderApp();

    expect(container).not.toBeNull();
  });
});
