import React from 'react';

import { render } from '@testing-library/react';

import ListContainer from './ListContainer';

describe('<ListContainer />', () => {
  const renderList = () => render(<ListContainer />);

  describe('render', () => {
    it('restaurants list', () => {
      // When
      const { getByRole } = renderList();

      // Then
      expect(getByRole('list')).toBeInTheDocument();
    });
  });
});
