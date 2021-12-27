import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  context('without list', () => {
    it('show a blank sheet', () => {
      const state = [];
      const { getByText } = render(<List lists={state} />);

      expect(getByText(/Restaurant/).firstElementChild).toBeNull();
    });
  });

  context('with list', () => {
    it('show state lists', () => {
      const state = [
        {
          name: '칠암아나고',
          type: '수산업',
          address: '부산시 기장군',
        },
      ];

      const { getByText } = render(<List lists={state} />);

      expect(getByText(/아나고/)).not.toBeNull();
    });
  });
});
