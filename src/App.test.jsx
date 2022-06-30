import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  context('App이 렌더링 될 때', () => {
    it('Restaurants가 보여집니다.', () => {
      const { getByText } = render((
        <App />
      ));

      expect(getByText(/Restaurants/)).not.toBeNull();
    });
  });
});
