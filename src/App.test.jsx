import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  describe('restaurant list', () => {
    context('when initial state', () => {
      it('is empty', () => {
        const { container } = render(
          <App />,
        );
        expect(container).not.toHaveTextContent('식당');
      });
    });
  });
});
