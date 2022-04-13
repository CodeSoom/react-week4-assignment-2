import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders restaurant', () => {
    const { container } = render((
      <App />
    ));

    expect(container).toHaveTextContent('시카고피자 | 양식 | 이태원구');
    expect(container).toHaveTextContent('마녀식당 | 한식 | 서울시 강남구');
  });
});
