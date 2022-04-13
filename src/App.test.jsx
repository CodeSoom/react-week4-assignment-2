import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders restaurant', () => {
    const { container } = render((
      <App />
    ));

    expect(container).toHaveTextContent('시카고피자 | 양식 | 서울시 강남구');
  });
});
