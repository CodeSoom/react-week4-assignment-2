import { render, fireEvent } from '@testing-library/react';

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

  describe('restaurant information inputs', () => {
    it('are 3 for name, classification, and address', () => {
      const { getByPlaceholderText } = render(
        <App />,
      );

      expect(getByPlaceholderText('이름')).not.toBeNull();
      expect(getByPlaceholderText('분류')).not.toBeNull();
      expect(getByPlaceholderText('주소')).not.toBeNull();
    });
  });
});
