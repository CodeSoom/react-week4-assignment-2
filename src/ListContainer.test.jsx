import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('<ListContainer />', () => {
  useSelector.mockImplementation(() => ({
    restaurants: [{ id: 1, value: '낙원관 | 중식 | 서울 성동구' }],
  }));
  const renderList = () => render(<ListContainer />);

  describe('render', () => {
    it('restaurants list', () => {
      // When
      const { getByRole } = renderList();

      // Then
      expect(getByRole('list')).toHaveTextContent('낙원관 | 중식 | 서울 성동구');
    });
  });
});
