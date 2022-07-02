import { render } from '@testing-library/react';

import App from './App';

describe('<App/>', () => {
  const renderApp = () => render((
    <App />
  ));

  it('타이틀이 보인다', () => {
    const { getByText } = renderApp();

    expect(getByText(/Restaurants/)).not.toBeNull();
  });
});
