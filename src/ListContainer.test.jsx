import React from 'react';
import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';
import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  context('when there is no list', () => {
    it('should render nothing', () => {
      const { queryByRole } = render(<ListContainer />);

      expect(queryByRole('list')).not.toBeInTheDocument();
    });
  });
  context('when there is a list', () => {
    it('should render restaurant list  ', () => {
      useSelector.mockImplementationOnce((selector) => selector({
        restaurantList: [{
          id: 0,
          name: '선정릉역 깐부치킨',
          category: '한식',
          address: '서울 강남구 삼성동 37 깐부치킨 선정릉역점',
        }],
      }));

      const { getByRole } = render(<ListContainer />);

      expect(getByRole('list')).toHaveTextContent('선정릉역 깐부치킨');
      expect(getByRole('list')).toHaveTextContent('한식');
      expect(getByRole('list')).toHaveTextContent('서울 강남구 삼성동 37 깐부치킨 선정릉역점');
    });
  });
});
