import React from 'react';
import { render } from '@testing-library/react';

import ListContainer from './ListContainer';

describe('ListContainer', () => {
  context('when there is no list', () => {
    it('should render nothing', () => {
      const { queryByRole } = render(<ListContainer />);

      expect(queryByRole('list')).not.toBeInTheDocument();
    });
  });
});
